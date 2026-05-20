function applicants() {
  return `
  <div class="mb-6">
    <h2 class="text-xl font-semibold" style="color:var(--text)">Applicants</h2>
    <p class="text-sm mt-0.5" style="color:var(--muted)">Review and manage applicants across all your job postings.</p>
  </div>

  <!-- Search + Filter row -->
  <div class="flex flex-wrap gap-3 mb-5">
    <div class="relative flex-1" style="min-width:200px; max-width:320px;">
      <svg class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style="color:var(--muted)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" placeholder="Search applicant name..." class="ap-field" style="padding-left:2.2rem;" oninput="searchApplicants(this.value)"/>
    </div>
    <select class="ap-field ap-select" style="max-width:200px;" onchange="filterByJob(this.value)">
      <option value="all">All Positions</option>
      <option>Production Operator</option>
      <option>HR Assistant</option>
      <option>IT Support Specialist</option>
      <option>Accounting Staff</option>
    </select>
    <select class="ap-field ap-select" style="max-width:180px;" onchange="filterByStatus(this.value)">
      <option value="all">All Statuses</option>
      <option>Under Review</option>
      <option>Shortlisted</option>
      <option>Hired</option>
      <option>Rejected</option>
    </select>
  </div>

  <!-- Applicant cards -->
  <div id="applicantList" class="flex flex-col gap-3">

    <!-- Applicant 1 -->
    <div class="ap-card" data-name="juan dela cruz" data-job="Production Operator" data-status="Under Review">
      <div class="flex items-center gap-4">
        <div class="ap-avatar" style="background: linear-gradient(135deg, #3498DB, #2471A3);">JD</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="text-sm font-semibold" style="color:var(--text)">Juan Dela Cruz</p>
            <span class="ap-badge" style="background:#EBF5FB; color:#1A5276;">Production Operator</span>
          </div>
          <p class="text-xs mt-0.5" style="color:var(--muted)">jdc@email.com · 09171234567</p>
          <p class="text-xs mt-1" style="color:var(--muted)">Applied: May 19, 2026</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <select class="ap-status-select" data-current="Under Review" onchange="updateStatus(this)">
            <option selected>Under Review</option>
            <option>Shortlisted</option>
            <option>Hired</option>
            <option>Rejected</option>
          </select>
          <button class="ap-btn-view" onclick="viewResume('Juan Dela Cruz')">View Resume</button>
        </div>
      </div>
    </div>

    <!-- Applicant 2 -->
    <div class="ap-card" data-name="maria santos" data-job="HR Assistant" data-status="Shortlisted">
      <div class="flex items-center gap-4">
        <div class="ap-avatar" style="background: linear-gradient(135deg, #27AE60, #1E8449);">MS</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="text-sm font-semibold" style="color:var(--text)">Maria Santos</p>
            <span class="ap-badge" style="background:#EAFAF1; color:#1E8449;">HR Assistant</span>
          </div>
          <p class="text-xs mt-0.5" style="color:var(--muted)">msantos@email.com · 09189876543</p>
          <p class="text-xs mt-1" style="color:var(--muted)">Applied: May 18, 2026</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <select class="ap-status-select" data-current="Shortlisted" onchange="updateStatus(this)">
            <option>Under Review</option>
            <option selected>Shortlisted</option>
            <option>Hired</option>
            <option>Rejected</option>
          </select>
          <button class="ap-btn-view" onclick="viewResume('Maria Santos')">View Resume</button>
        </div>
      </div>
    </div>

    <!-- Applicant 3 -->
    <div class="ap-card" data-name="renz lim" data-job="IT Support Specialist" data-status="Rejected">
      <div class="flex items-center gap-4">
        <div class="ap-avatar" style="background: linear-gradient(135deg, #8E44AD, #6C3483);">RL</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="text-sm font-semibold" style="color:var(--text)">Renz Lim</p>
            <span class="ap-badge" style="background:#F5EEF8; color:#6C3483;">IT Support Specialist</span>
          </div>
          <p class="text-xs mt-0.5" style="color:var(--muted)">renz@email.com · 09201112222</p>
          <p class="text-xs mt-1" style="color:var(--muted)">Applied: May 17, 2026</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <select class="ap-status-select" data-current="Rejected" onchange="updateStatus(this)">
            <option>Under Review</option>
            <option>Shortlisted</option>
            <option>Hired</option>
            <option selected>Rejected</option>
          </select>
          <button class="ap-btn-view" onclick="viewResume('Renz Lim')">View Resume</button>
        </div>
      </div>
    </div>

    <!-- Applicant 4 -->
    <div class="ap-card" data-name="ana cruz" data-job="Accounting Staff" data-status="Hired">
      <div class="flex items-center gap-4">
        <div class="ap-avatar" style="background: linear-gradient(135deg, #E67E22, #CA6F1E);">AC</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="text-sm font-semibold" style="color:var(--text)">Ana Cruz</p>
            <span class="ap-badge" style="background:#FEF9E7; color:#B7950B;">Accounting Staff</span>
          </div>
          <p class="text-xs mt-0.5" style="color:var(--muted)">acruz@email.com · 09334445555</p>
          <p class="text-xs mt-1" style="color:var(--muted)">Applied: May 16, 2026</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <select class="ap-status-select" data-current="Hired" onchange="updateStatus(this)">
            <option>Under Review</option>
            <option>Shortlisted</option>
            <option selected>Hired</option>
            <option>Rejected</option>
          </select>
          <button class="ap-btn-view" onclick="viewResume('Ana Cruz')">View Resume</button>
        </div>
      </div>
    </div>

    <!-- Applicant 5 -->
    <div class="ap-card" data-name="carlo reyes" data-job="Production Operator" data-status="Under Review">
      <div class="flex items-center gap-4">
        <div class="ap-avatar" style="background: linear-gradient(135deg, #17A589, #148F77);">CR</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="text-sm font-semibold" style="color:var(--text)">Carlo Reyes</p>
            <span class="ap-badge" style="background:#EBF5FB; color:#1A5276;">Production Operator</span>
          </div>
          <p class="text-xs mt-0.5" style="color:var(--muted)">creyes@email.com · 09456667777</p>
          <p class="text-xs mt-1" style="color:var(--muted)">Applied: May 15, 2026</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <select class="ap-status-select" data-current="Under Review" onchange="updateStatus(this)">
            <option selected>Under Review</option>
            <option>Shortlisted</option>
            <option>Hired</option>
            <option>Rejected</option>
          </select>
          <button class="ap-btn-view" onclick="viewResume('Carlo Reyes')">View Resume</button>
        </div>
      </div>
    </div>

  </div>

  <!-- Resume Modal -->
  <div id="resumeModal" class="ap-modal-overlay" onclick="closeResume(event)">
    <div class="ap-modal">
      <div class="flex items-center justify-between mb-5">
        <h3 class="text-sm font-semibold" style="color:var(--text)" id="modalName">Resume</h3>
        <button onclick="document.getElementById('resumeModal').style.display='none'" style="color:var(--muted); background:none; border:none; cursor:pointer; font-size:1.2rem;">✕</button>
      </div>
      <!-- Mock resume content -->
      <div class="flex items-center gap-3 mb-5 pb-5" style="border-bottom:1px solid var(--border)">
        <div class="ap-avatar" id="modalAvatar" style="background: linear-gradient(135deg,#3498DB,#2471A3); width:48px; height:48px; font-size:1rem;">JD</div>
        <div>
          <p class="font-semibold text-sm" style="color:var(--text)" id="modalFullName">Juan Dela Cruz</p>
          <p class="text-xs" style="color:var(--muted)">jdc@email.com · 09171234567 · Santa Rosa City, Laguna</p>
        </div>
      </div>
      <div class="flex flex-col gap-4 text-xs" style="color:var(--text)">
        <div>
          <p class="font-semibold text-xs uppercase tracking-wider mb-1.5" style="color:var(--muted)">Objective</p>
          <p style="color:var(--muted); line-height:1.6">Seeking a challenging position where I can apply my skills and grow professionally within a dynamic organization.</p>
        </div>
        <div>
          <p class="font-semibold text-xs uppercase tracking-wider mb-1.5" style="color:var(--muted)">Education</p>
          <p class="font-medium">Bachelor of Science in Industrial Engineering</p>
          <p style="color:var(--muted)">University of Santo Tomas · 2022</p>
        </div>
        <div>
          <p class="font-semibold text-xs uppercase tracking-wider mb-1.5" style="color:var(--muted)">Work Experience</p>
          <p class="font-medium">Production Line Supervisor</p>
          <p style="color:var(--muted)">ABC Manufacturing Corp. · 2022–2025</p>
        </div>
        <div>
          <p class="font-semibold text-xs uppercase tracking-wider mb-1.5" style="color:var(--muted)">Skills</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="ap-badge" style="background:#F2F3F4; color:var(--text)">Quality Control</span>
            <span class="ap-badge" style="background:#F2F3F4; color:var(--text)">Lean Manufacturing</span>
            <span class="ap-badge" style="background:#F2F3F4; color:var(--text)">MS Office</span>
            <span class="ap-badge" style="background:#F2F3F4; color:var(--text)">Team Leadership</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .ap-field {
      width: 100%;
      padding: 0.6rem 0.85rem;
      border: 1.5px solid var(--border);
      border-radius: 8px;
      font-size: 0.875rem;
      color: var(--text);
      background: #fff;
      outline: none;
      font-family: 'DM Sans', sans-serif;
      transition: border-color 0.2s;
    }
    .ap-field:focus { border-color: var(--red); }
    .ap-select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B68' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.8rem center;
      padding-right: 2rem;
    }
    .ap-card {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px 20px;
      transition: box-shadow 0.15s;
    }
    .ap-card:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    .ap-card.hidden { display: none; }

    .ap-avatar {
      width: 40px; height: 40px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .ap-badge {
      display: inline-block;
      padding: 2px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 500;
    }
    .ap-status-select {
      padding: 5px 28px 5px 10px;
      font-size: 0.78rem;
      font-weight: 500;
      border-radius: 7px;
      border: 1.5px solid var(--border);
      background: #fff;
      color: var(--text);
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%236B6B68' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.6rem center;
      outline: none;
    }
    .ap-btn-view {
      padding: 5px 14px;
      font-size: 0.78rem;
      font-weight: 600;
      border-radius: 7px;
      border: 1.5px solid var(--red);
      background: transparent;
      color: var(--red);
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      white-space: nowrap;
      transition: background 0.15s;
    }
    .ap-btn-view:hover { background: var(--red-lt); }

    /* Modal */
    .ap-modal-overlay {
      display: none;
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.35);
      z-index: 100;
      align-items: center;
      justify-content: center;
    }
    .ap-modal-overlay.open { display: flex; }
    .ap-modal {
      background: #fff;
      border-radius: 14px;
      padding: 28px;
      width: 100%;
      max-width: 480px;
      max-height: 85vh;
      overflow-y: auto;
      margin: 16px;
    }
  </style>
  `;
}

function searchApplicants(val) {
  const q = val.toLowerCase();
  document.querySelectorAll('.ap-card').forEach(card => {
    card.classList.toggle('hidden', !card.dataset.name.includes(q));
  });
}

function filterByJob(val) {
  document.querySelectorAll('.ap-card').forEach(card => {
    card.classList.toggle('hidden', val !== 'all' && card.dataset.job !== val);
  });
}

function filterByStatus(val) {
  document.querySelectorAll('.ap-card').forEach(card => {
    card.classList.toggle('hidden', val !== 'all' && card.dataset.status !== val);
  });
}

function updateStatus(select) {
  select.closest('.ap-card').dataset.status = select.value;
}

function viewResume(name) {
  const initials = name.split(' ').map(n => n[0]).join('');
  document.getElementById('modalName').textContent = name + ' — Resume';
  document.getElementById('modalFullName').textContent = name;
  document.getElementById('modalAvatar').textContent = initials;
  const modal = document.getElementById('resumeModal');
  modal.classList.add('open');
  modal.style.display = 'flex';
}

function closeResume(e) {
  if (e.target.id === 'resumeModal') {
    document.getElementById('resumeModal').style.display = 'none';
    document.getElementById('resumeModal').classList.remove('open');
  }
}