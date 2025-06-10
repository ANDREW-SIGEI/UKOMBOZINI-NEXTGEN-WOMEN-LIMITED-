// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mock data - In production, this would come from your backend
    const mockData = {
        member: {
            name: 'Jane Doe',
            totalSavings: 150000,
            activeLoans: 25000,
            groupShare: 15
        },
        contributions: [
            { date: '2024-03-01', amount: 5000, type: 'Monthly', status: 'Completed' },
            { date: '2024-02-01', amount: 5000, type: 'Monthly', status: 'Completed' },
            { date: '2024-01-01', amount: 5000, type: 'Monthly', status: 'Completed' }
        ],
        loans: [
            { id: 'L001', amount: 25000, date: '2024-01-15', status: 'Active' }
        ],
        meetings: [
            { date: '2024-03-15', title: 'Monthly Group Meeting', location: 'Nairobi Office' },
            { date: '2024-03-30', title: 'Financial Training', location: 'Community Hall' }
        ]
    };

    // Initialize dashboard
    initializeDashboard(mockData);

    // Handle loan application form submission
    const loanForm = document.getElementById('loanApplicationForm');
    if (loanForm) {
        loanForm.addEventListener('submit', handleLoanApplication);
    }
});

function initializeDashboard(data) {
    // Update member information
    document.getElementById('memberName').textContent = data.member.name;
    document.getElementById('totalSavings').textContent = formatCurrency(data.member.totalSavings);
    document.getElementById('activeLoans').textContent = formatCurrency(data.member.activeLoans);
    document.getElementById('groupShare').textContent = data.member.groupShare;

    // Populate contributions table
    const contributionsTable = document.getElementById('contributionsTable');
    if (contributionsTable) {
        data.contributions.forEach(contribution => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${formatDate(contribution.date)}</td>
                <td>KSh ${formatCurrency(contribution.amount)}</td>
                <td>${contribution.type}</td>
                <td><span class="badge bg-success">${contribution.status}</span></td>
            `;
            contributionsTable.appendChild(row);
        });
    }

    // Populate loans table
    const loansTable = document.getElementById('loansTable');
    if (loansTable) {
        data.loans.forEach(loan => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${loan.id}</td>
                <td>KSh ${formatCurrency(loan.amount)}</td>
                <td>${formatDate(loan.date)}</td>
                <td><span class="badge bg-primary">${loan.status}</span></td>
                <td><button class="btn btn-sm btn-info">View Details</button></td>
            `;
            loansTable.appendChild(row);
        });
    }

    // Populate meetings calendar
    const meetingsCalendar = document.getElementById('meetingsCalendar');
    if (meetingsCalendar) {
        data.meetings.forEach(meeting => {
            const meetingDiv = document.createElement('div');
            meetingDiv.className = 'meeting-item p-3 mb-3 border rounded';
            meetingDiv.innerHTML = `
                <h5>${meeting.title}</h5>
                <p><i class="fas fa-calendar-alt"></i> ${formatDate(meeting.date)}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${meeting.location}</p>
            `;
            meetingsCalendar.appendChild(meetingDiv);
        });
    }
}

function handleLoanApplication(event) {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Loan application submitted successfully!');
    const modal = bootstrap.Modal.getInstance(document.getElementById('loanApplicationModal'));
    modal.hide();
}

function formatCurrency(amount) {
    return amount.toLocaleString('en-KE');
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-KE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
} 