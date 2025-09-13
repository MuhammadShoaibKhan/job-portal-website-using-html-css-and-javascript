// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Job data
const jobs = [
  {title:'Frontend Dev', company:'EcoWeb', location:'Remote', desc:'Work on UI with modern frameworks.'},
  {title:'Backend Dev', company:'GreenCloud', location:'Lahore', desc:'Build APIs and server logic.'},
  {title:'Product Manager', company:'SolarX', location:'Islamabad', desc:'Manage product lifecycle and teams.'},
  {title:'Designer', company:'Leaf Studios', location:'Karachi', desc:'Create UI/UX designs.'},
  {title:'Data Analyst', company:'Recyclo', location:'Remote', desc:'Analyze datasets and build reports.'},
    {title:'DevOps',company:'GreenCloud',location:'Remote',desc:'Maintain cloud infra and CI/CD.'},
      {title:'QA Engineer',company:'EcoWeb',location:'Karachi',desc:'Test applications and automate QA.'},
      {title:'Marketing',company:'SolarX',location:'Lahore',desc:'Plan and execute campaigns.'}

];

const grid = document.getElementById('jobsGrid');
const noJobsEl = document.getElementById('noJobs');

// Render job cards
function render(list) {
  grid.innerHTML = '';
  if (!list.length) {
    noJobsEl.style.display = 'block';
    return;
  }
  noJobsEl.style.display = 'none';

  list.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';

    const title = document.createElement('h3');
    title.textContent = job.title;

    const meta = document.createElement('p');
    meta.textContent = `${job.company} - ${job.location}`;

    const tick = document.createElement('span');
    tick.className = 'tick';
    tick.textContent = '✔';

    const applyBtn = document.createElement('button');
    applyBtn.textContent = 'Apply';
    applyBtn.addEventListener('click', () => {
      alert(`You have applied on ${job.title} successfully`);
      card.classList.add('applied');
      applyBtn.style.background = '#555';
      applyBtn.disabled = true;
    });

    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View';
    viewBtn.style.marginLeft = '6px';
    viewBtn.addEventListener('click', () => {
      openModal(job);
    });

    card.append(title, meta, applyBtn, viewBtn, tick);
    grid.appendChild(card);
  });
}

// Modal handling
function openModal(job) {
  document.getElementById('modalTitle').textContent = job.title;
  document.getElementById('modalCompany').textContent = `Company: ${job.company}`;
  document.getElementById('modalLocation').textContent = `Location: ${job.location}`;
  document.getElementById('modalDesc').textContent = job.desc;
  document.getElementById('jobModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('jobModal').style.display = 'none';
}

render(jobs);

// Search filter
document.getElementById('searchInput').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(q) ||
    j.company.toLowerCase().includes(q) ||
    j.location.toLowerCase().includes(q)
  );
  render(filtered);
});
