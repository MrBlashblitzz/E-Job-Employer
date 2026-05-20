function dashboard() {
  return `
  <div class="mb-6">
    <h2 class="text-xl font-semibold" style="color:var(--text)">Dashboard</h2>
    <p class="text-sm mt-0.5" style="color:var(--muted)">Welcome back! Here's an overview of your recruitment activity.</p>
  </div>

  <!-- ── STAT CARDS ── -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

    <div class="stat-card">
      <div class="flex items-start justify-between mb-3">
        <div class="stat-icon" style="background:#DDEEFF">
          <svg class="w-5 h-5" style="color:#1A73E8" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
        </div>
        <span class="text-xs font-medium" style="color:#1A73E8">Active</span>
      </div>
      <p class="text-2xl font-bold" style="color:var(--text)">8</p>
      <p class="text-xs mt-1" style="color:var(--muted)">Active Job Postings</p>
    </div>

    <div class="stat-card">
      <div class="flex items-start justify-between mb-3">
        <div class="stat-icon" style="background:#D5F5E3">
          <svg class="w-5 h-5" style="color:#1E8449" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <span class="text-xs font-medium" style="color:#1E8449">+12 today</span>
      </div>
      <p class="text-2xl font-bold" style="color:var(--text)">124</p>
      <p class="text-xs mt-1" style="color:var(--muted)">Total Applicants</p>
    </div>

    <div class="stat-card">
      <div class="flex items-start justify-between mb-3">
        <div class="stat-icon" style="background:#FEF9E7">
          <svg class="w-5 h-5" style="color:#B7950B" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <span class="text-xs font-medium" style="color:#B7950B">Pending</span>
      </div>
      <p class="text-2xl font-bold" style="color:var(--text)">3</p>
      <p class="text-xs mt-1" style="color:var(--muted)">Awaiting PESO Approval</p>
    </div>

    <div class="stat-card">
      <div class="flex items-start justify-between mb-3">
        <div class="stat-icon" style="background:var(--red-lt)">
          <svg class="w-5 h-5" style="color:var(--red)" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        </div>
        <span class="text-xs font-medium" style="color:var(--red)">This month</span>
      </div>
      <p class="text-2xl font-bold" style="color:var(--text)">17</p>
      <p class="text-xs mt-1" style="color:var(--muted)">Hired Applicants</p>
    </div>

  </div>

  <!-- ── CHARTS ROW ── -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

    <!-- Applicants over time (line) -->
    <div class="chart-card lg:col-span-2">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h3 class="text-sm font-semibold" style="color:var(--text)">Applicants Over Time</h3>
          <p class="text-xs" style="color:var(--muted)">Last 7 days</p>
        </div>
      </div>
      <canvas id="lineChart" height="110"></canvas>
    </div>

    <!-- Applications by job (doughnut) -->
    <div class="chart-card">
      <div class="mb-4">
        <h3 class="text-sm font-semibold" style="color:var(--text)">Applications by Job</h3>
        <p class="text-xs" style="color:var(--muted)">Current postings</p>
      </div>
      <canvas id="barChart" height="180"></canvas>
    </div>

  </div>

  <!-- ── RECENT APPLICATIONS TABLE ── -->
  <div class="table-card">
    <div class="flex items-center justify-between px-5 py-4 border-b" style="border-color:var(--border)">
      <h3 class="text-sm font-semibold" style="color:var(--text)">Recent Applications</h3>
      <a href="applicants.html" class="text-xs font-medium" style="color:var(--red)">View all →</a>
    </div>
    <div class="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Applicant</th>
            <th>Position Applied</th>
            <th>Date Applied</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style="background:#3498DB">JD</div>
                <div>
                  <p class="font-medium text-xs">Juan Dela Cruz</p>
                  <p class="text-xs" style="color:var(--muted)">jdc@email.com</p>
                </div>
              </div>
            </td>
            <td class="text-xs">Production Operator</td>
            <td class="text-xs" style="color:var(--muted)">May 19, 2026</td>
            <td><span class="badge badge-yellow">Under Review</span></td>
            <td><a href="applicants.html" class="text-xs font-medium" style="color:var(--red)">View</a></td>
          </tr>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style="background:#27AE60">MS</div>
                <div>
                  <p class="font-medium text-xs">Maria Santos</p>
                  <p class="text-xs" style="color:var(--muted)">msantos@email.com</p>
                </div>
              </div>
            </td>
            <td class="text-xs">HR Assistant</td>
            <td class="text-xs" style="color:var(--muted)">May 18, 2026</td>
            <td><span class="badge badge-green">Shortlisted</span></td>
            <td><a href="applicants.html" class="text-xs font-medium" style="color:var(--red)">View</a></td>
          </tr>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style="background:#8E44AD">RL</div>
                <div>
                  <p class="font-medium text-xs">Renz Lim</p>
                  <p class="text-xs" style="color:var(--muted)">renz@email.com</p>
                </div>
              </div>
            </td>
            <td class="text-xs">IT Support</td>
            <td class="text-xs" style="color:var(--muted)">May 17, 2026</td>
            <td><span class="badge badge-red">Rejected</span></td>
            <td><a href="applicants.html" class="text-xs font-medium" style="color:var(--red)">View</a></td>
          </tr>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style="background:#E67E22">AC</div>
                <div>
                  <p class="font-medium text-xs">Ana Cruz</p>
                  <p class="text-xs" style="color:var(--muted)">acruz@email.com</p>
                </div>
              </div>
            </td>
            <td class="text-xs">Accounting Staff</td>
            <td class="text-xs" style="color:var(--muted)">May 16, 2026</td>
            <td><span class="badge badge-gray">Hired</span></td>
            <td><a href="applicants.html" class="text-xs font-medium" style="color:var(--red)">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`
}

function dashboard_init() {
  setTimeout(() => {

    // ── Line Chart ──
    const lineCtx = document.getElementById('lineChart');
    if (lineCtx) {
      new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ['May 13','May 14','May 15','May 16','May 17','May 18','May 19'],
          datasets: [{
            label: 'Applicants',
            data: [8, 14, 10, 18, 12, 22, 17],
            borderColor: '#C0392B',
            backgroundColor: 'rgba(192,57,43,0.08)',
            borderWidth: 2,
            pointBackgroundColor: '#C0392B',
            pointRadius: 4,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 11 } } },
            y: { grid: { color: '#F0F0EE' }, ticks: { font: { size: 11 } }, beginAtZero: true }
          }
        }
      });
    }

    // ── Horizontal Bar Chart ──
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Production\nOperator', 'HR\nAssistant', 'IT\nSupport', 'Accounting\nStaff'],
          datasets: [{
            label: 'Applicants',
            data: [45, 28, 19, 32],
            backgroundColor: ['#C0392B','#E67E22','#1A73E8','#27AE60'],
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 18
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.parsed.x} applicants`
              }
            }
          },
          scales: {
            x: {
              grid: { color: '#F0F0EE' },
              ticks: { font: { size: 11 } },
              beginAtZero: true
            },
            y: {
              grid: { display: false },
              ticks: {
                font: { size: 11 },
                color: '#6B6B68'
              }
            }
          }
        }
      });
    }

  }, 50);
}