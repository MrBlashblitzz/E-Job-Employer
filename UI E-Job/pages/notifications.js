function notifications() {
  return `
  <div class="flex items-center justify-between mb-6">
    <div>
      <h2 class="text-xl font-semibold" style="color:var(--text)">Notifications</h2>
      <p class="text-sm mt-0.5" style="color:var(--muted)">Stay updated on your job postings and applicants.</p>
    </div>
    <button class="nt-btn-ghost" onclick="markAllRead()">Mark all as read</button>
  </div>

  <!-- Filter tabs -->
  <div class="flex gap-2 mb-5">
    <button class="nt-tab active" onclick="filterNotifs('all', this)">All <span class="nt-count">6</span></button>
    <button class="nt-tab" onclick="filterNotifs('unread', this)">Unread <span class="nt-count">2</span></button>
    <button class="nt-tab" onclick="filterNotifs('applicant', this)">Applicants <span class="nt-count">3</span></button>
    <button class="nt-tab" onclick="filterNotifs('peso', this)">PESO <span class="nt-count">2</span></button>
    <button class="nt-tab" onclick="filterNotifs('posting', this)">Postings <span class="nt-count">1</span></button>
  </div>

  <!-- Notification list -->
  <div id="notifList" class="flex flex-col gap-2">

    <!-- Unread: New applicant -->
    <div class="nt-card unread" data-type="applicant">
      <div class="flex items-start gap-4">
        <div class="nt-icon-wrap">
          <svg class="w-4 h-4" style="color:#3498DB" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2">
            <p class="text-sm font-semibold" style="color:var(--text)">New applicant for Production Operator</p>
            <span class="nt-unread-dot"></span>
          </div>
          <p class="text-xs mt-1" style="color:var(--muted)"><strong style="color:var(--text)">Juan Dela Cruz</strong> submitted an application. Review their resume now.</p>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xs" style="color:var(--muted)">Today, 9:42 AM</span>
            <button class="nt-action-link" onclick="loadPage('applicants', document.querySelector('[data-page=applicants]'))">View Applicant →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Unread: PESO message -->
    <div class="nt-card unread" data-type="peso">
      <div class="flex items-start gap-4">
        <div class="nt-icon-wrap">
          <svg class="w-4 h-4" style="color:var(--red)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2">
            <p class="text-sm font-semibold" style="color:var(--text)">Message from PESO Santa Rosa</p>
            <span class="nt-unread-dot"></span>
          </div>
          <p class="text-xs mt-1" style="color:var(--muted)">Your job posting for <strong style="color:var(--text)">Accounting Staff</strong> requires additional documentation before approval. Please check your email.</p>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xs" style="color:var(--muted)">Today, 8:15 AM</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Read: Posting approved -->
    <div class="nt-card" data-type="peso">
      <div class="flex items-start gap-4">
        <div class="nt-icon-wrap">
          <svg class="w-4 h-4" style="color:#27AE60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold" style="color:var(--text)">Job posting approved by PESO</p>
          <p class="text-xs mt-1" style="color:var(--muted)">Your posting for <strong style="color:var(--text)">IT Support Specialist</strong> is now live and visible to job seekers.</p>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xs" style="color:var(--muted)">Yesterday, 3:30 PM</span>
            <button class="nt-action-link" onclick="loadPage('manage-jobs', document.querySelector('[data-page=manage-jobs]'))">View Posting →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Read: Applicant shortlisted -->
    <div class="nt-card" data-type="applicant">
      <div class="flex items-start gap-4">
        <div class="nt-icon-wrap">
          <svg class="w-4 h-4" style="color:#8E44AD" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold" style="color:var(--text)">Applicant status updated</p>
          <p class="text-xs mt-1" style="color:var(--muted)"><strong style="color:var(--text)">Maria Santos</strong> has been moved to <strong style="color:var(--text)">Shortlisted</strong> for HR Assistant.</p>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xs" style="color:var(--muted)">Yesterday, 1:10 PM</span>
            <button class="nt-action-link" onclick="loadPage('applicants', document.querySelector('[data-page=applicants]'))">View Applicant →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Read: Job posting expiring -->
    <div class="nt-card" data-type="posting">
      <div class="flex items-start gap-4">
        <div class="nt-icon-wrap">
          <svg class="w-4 h-4" style="color:#E67E22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold" style="color:var(--text)">Job posting expiring soon</p>
          <p class="text-xs mt-1" style="color:var(--muted)">Your posting for <strong style="color:var(--text)">Production Operator</strong> expires in <strong style="color:#E67E22">3 days</strong>. Extend the deadline if needed.</p>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xs" style="color:var(--muted)">May 18, 2026</span>
            <button class="nt-action-link" onclick="loadPage('manage-jobs', document.querySelector('[data-page=manage-jobs]'))">Manage Posting →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Read: New applicant -->
    <div class="nt-card" data-type="applicant">
      <div class="flex items-start gap-4">
        <div class="nt-icon-wrap">
          <svg class="w-4 h-4" style="color:#17A589" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold" style="color:var(--text)">New applicant for HR Assistant</p>
          <p class="text-xs mt-1" style="color:var(--muted)"><strong style="color:var(--text)">Carlo Reyes</strong> submitted an application. Review their resume now.</p>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xs" style="color:var(--muted)">May 17, 2026</span>
            <button class="nt-action-link" onclick="loadPage('applicants', document.querySelector('[data-page=applicants]'))">View Applicant →</button>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Empty state (hidden by default) -->
  <div id="notifEmpty" class="hidden flex flex-col items-center justify-center py-16" style="color:var(--muted)">
    <svg class="w-10 h-10 mb-3 opacity-30" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    <p class="text-sm font-medium">No notifications here</p>
    <p class="text-xs mt-1">You're all caught up!</p>
  </div>
  `;
}

function filterNotifs(type, btn) {
  document.querySelectorAll('.nt-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.nt-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const matchType   = type === 'all' || card.dataset.type === type;
    const matchUnread = type !== 'unread' || card.classList.contains('unread');
    const show = type === 'unread' ? matchUnread : matchType;
    card.classList.toggle('hidden', !show);
    if (show) visibleCount++;
  });

  document.getElementById('notifEmpty').classList.toggle('hidden', visibleCount > 0);
}

function markAllRead() {
  document.querySelectorAll('.nt-card.unread').forEach(card => {
    card.classList.remove('unread');
    const dot = card.querySelector('.nt-unread-dot');
    if (dot) dot.remove();
  });
  // Update badge in sidebar
  const badge = document.getElementById('notifBadge');
  if (badge) badge.style.display = 'none';
  // Update topbar dot
  const topDot = document.querySelector('.notif-dot');
  if (topDot) topDot.style.display = 'none';
}