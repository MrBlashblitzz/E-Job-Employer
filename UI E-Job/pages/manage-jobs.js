function manageJobs() {
  return `
  <!-- Edit Modal -->
  <div id="editJobModal" class="mj-modal-overlay" onclick="closeEditModal(event)">
    <div class="mj-modal">
      <div class="flex items-center justify-between mb-5">
        <p class="text-sm font-semibold" style="color:var(--text)">Edit Job Posting</p>
        <button onclick="document.getElementById('editJobModal').style.display='none'" style="background:none;border:none;cursor:pointer;color:var(--muted);font-size:1.1rem;">✕</button>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <label class="mj-modal-label">Job Title</label>
          <input type="text" class="mj-modal-field" value="Production Operator"/>
        </div>
        <div>
          <label class="mj-modal-label">Job Description</label>
          <textarea class="mj-modal-field" rows="3" style="resize:vertical">Responsible for operating production machinery and ensuring quality output in the manufacturing line.</textarea>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="mj-modal-label">Min Salary (PHP)</label>
            <input type="number" class="mj-modal-field" value="18000"/>
          </div>
          <div>
            <label class="mj-modal-label">Max Salary (PHP)</label>
            <input type="number" class="mj-modal-field" value="22000"/>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="mj-modal-label">Employment Type</label>
            <select class="mj-modal-field mj-modal-select">
              <option selected>Full-time</option>
              <option>Part-time</option>
              <option>Contractual</option>
              <option>Project-based</option>
            </select>
          </div>
          <div>
            <label class="mj-modal-label">No. of Vacancies</label>
            <input type="number" class="mj-modal-field" value="5" min="1"/>
          </div>
        </div>
        <div>
          <label class="mj-modal-label">Application Deadline</label>
          <input type="date" class="mj-modal-field" value="2026-05-30"/>
        </div>
        <div class="flex gap-3 mt-1">
          <button onclick="saveJobEdit()" style="flex:1;padding:0.65rem;background:var(--red);color:#fff;font-weight:600;font-size:0.875rem;border-radius:8px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;">Save Changes</button>
          <button onclick="document.getElementById('editJobModal').style.display='none'" style="flex:1;padding:0.65rem;background:transparent;color:var(--muted);font-weight:500;font-size:0.875rem;border-radius:8px;border:1.5px solid var(--border);cursor:pointer;font-family:'DM Sans',sans-serif;">Cancel</button>
        </div>
      </div>
    </div>
  </div>




  <div class="mb-6">
    <h2 class="text-xl font-semibold" style="color:var(--text)">Manage Jobs</h2>
    <p class="text-sm mt-0.5" style="color:var(--muted)">View and manage all your job postings.</p>
  </div>

  <!-- Filter tabs -->
  <div class="flex gap-2 mb-5">
    <button class="mj-tab active" onclick="filterJobs('all', this)">All <span class="mj-count">11</span></button>
    <button class="mj-tab" onclick="filterJobs('active', this)">Active <span class="mj-count">8</span></button>
    <button class="mj-tab" onclick="filterJobs('pending', this)">Pending <span class="mj-count">3</span></button>
    <button class="mj-tab" onclick="filterJobs('closed', this)">Closed <span class="mj-count">0</span></button>
  </div>

  <!-- Job cards -->
  <div id="jobList" class="flex flex-col gap-3">

    <div class="mj-card" data-status="active">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="badge badge-green">Active</span>
            <span class="text-xs" style="color:var(--muted)">Posted May 15, 2026 · Deadline May 30, 2026</span>
          </div>
          <h3 class="text-sm font-semibold mb-1" style="color:var(--text)">Production Operator</h3>
          <div class="flex flex-wrap gap-3 text-xs" style="color:var(--muted)">
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Brgy. Balibago, Santa Rosa City
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              Full-time
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              ₱18,000 – ₱22,000/mo
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              5 vacancies
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="text-xs font-semibold" style="color:var(--text)">42 applicants</span>
          <div class="mj-actions">
            <button class="mj-btn-ghost" onclick="loadPage('applicants', document.querySelector('[data-page=applicants]'))">View Applicants</button>
            <button class="mj-btn-ghost" onclick="openEditModal()">Edit</button>
            <button class="mj-btn-close">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mj-card" data-status="active">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="badge badge-green">Active</span>
            <span class="text-xs" style="color:var(--muted)">Posted May 14, 2026 · Deadline Jun 5, 2026</span>
          </div>
          <h3 class="text-sm font-semibold mb-1" style="color:var(--text)">HR Assistant</h3>
          <div class="flex flex-wrap gap-3 text-xs" style="color:var(--muted)">
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Brgy. Dila, Santa Rosa City
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              Full-time
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              ₱16,000 – ₱20,000
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              2 vacancies
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="text-xs font-semibold" style="color:var(--text)">28 applicants</span>
          <div class="mj-actions">
            <button class="mj-btn-ghost" onclick="loadPage('applicants', document.querySelector('[data-page=applicants]'))">View Applicants</button>
            <button class="mj-btn-ghost" onclick="openEditModal()">Edit</button>
            <button class="mj-btn-close">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mj-card" data-status="active">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="badge badge-green">Active</span>
            <span class="text-xs" style="color:var(--muted)">Posted May 13, 2026 · Deadline Jun 10, 2026</span>
          </div>
          <h3 class="text-sm font-semibold mb-1" style="color:var(--text)">IT Support Specialist</h3>
          <div class="flex flex-wrap gap-3 text-xs" style="color:var(--muted)">
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Brgy. Tagapo, Santa Rosa City
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              Full-time
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              ₱20,000 – ₱25,000
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              1 vacancies
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="text-xs font-semibold" style="color:var(--text)">19 applicants</span>
          <div class="mj-actions">
            <button class="mj-btn-ghost" onclick="loadPage('applicants', document.querySelector('[data-page=applicants]'))">View Applicants</button>
            <button class="mj-btn-ghost" onclick="openEditModal()">Edit</button>
            <button class="mj-btn-close">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mj-card" data-status="pending">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="badge badge-yellow">Pending</span>
            <span class="text-xs" style="color:var(--muted)">Submitted May 19, 2026 · Awaiting PESO approval</span>
          </div>
          <h3 class="text-sm font-semibold mb-1" style="color:var(--text)">Accounting Staff</h3>
          <div class="flex flex-wrap gap-3 text-xs" style="color:var(--muted)">
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Brgy. Macabling, Santa Rosa City
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              Full-time
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              ₱18,000 – ₱22,000
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              2 vacancies
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="text-xs" style="color:var(--muted)">Not yet live</span>
          <div class="mj-actions">
            <button class="mj-btn-ghost" onclick="openEditModal()">Edit</button>
          </div>
        </div>
      </div>
    </div>

  </div>
  `;
}

function filterJobs(status, btn) {
  document.querySelectorAll('.mj-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.mj-card').forEach(card => {
    if (status === 'all' || card.dataset.status === status) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function openEditModal() {
  const modal = document.getElementById('editJobModal');
  modal.style.display = 'flex';
}

function closeEditModal(e) {
  if (e.target.id === 'editJobModal') {
    document.getElementById('editJobModal').style.display = 'none';
  }
}

function saveJobEdit() {
  document.getElementById('editJobModal').style.display = 'none';
  const toast = document.createElement('div');
  toast.textContent = '⏳ Job posting updated — pending PESO approval.';
toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#F9E79F;color:#7D6608;padding:10px 18px;border-radius:8px;font-size:0.82rem;font-weight:500;z-index:9999;font-family:DM Sans,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}