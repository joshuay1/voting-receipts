function loadReceipts() {
    const i18n = window.KK26_I18N;
    const t = (key, values) => i18n ? i18n.t(key, values) : key;
    const introDiv = document.getElementById('intro-text');
    const techInfo = document.getElementById('tech-info');
    const filterBar = document.getElementById('filter-bar');
    const grid = document.getElementById('receipts-grid');

    // Only boot on the receipts page.
    if (!introDiv || !techInfo || !filterBar || !grid) return;

    try {
        const data = window.KK26_PROJECTS;
        if (!data) throw new Error('KK26_PROJECTS data not found');

        // Calculate stats
        const totalVoters = data.voter_receipts.length;
        const totalSpent = data.voter_receipts.reduce((sum, v) => sum + v.total_spent, 0);
        const totalFunded = data.voter_receipts.reduce((sum, v) => sum + v.funded_count, 0);
        const avgSpent = totalSpent / totalVoters;
        const avgFunded = totalFunded / totalVoters;

        const avgFundedText = i18n
            ? i18n.formatNumber(avgFunded, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            : avgFunded.toFixed(1).replace('.', ',');
        const avgSpentText = formatReceiptCHF(avgSpent, 0);

        // Update header/intro
        introDiv.className = 'intro-section'; // Ensure it has the class
        introDiv.innerHTML = `
            <p class="philosophy">${t('receipts.intro.philosophy')}</p>
            <p>${t('receipts.intro.stats', { totalVoters, avgFunded: avgFundedText, avgSpent: avgSpentText })}</p>
            <p>${t('receipts.intro.privacy')}</p>
        `;
        techInfo.style.display = 'block';
        filterBar.style.display = 'flex';

        // Update Filter counts
        const allBtn = document.querySelector('.filter-btn[data-group="ALL"]');
        if(allBtn) allBtn.textContent = `${t('filters.all')} (${data.voter_receipts.length})`;

        grid.innerHTML = ''; // Clear loading state

        window.receiptsData = data;

        // Randomize voter order for the "Alle" view
        data.voter_receipts.sort(() => Math.random() - 0.5);

        data.voter_receipts.forEach(receipt => {
            const card = renderReceipt(receipt);
            grid.appendChild(card);
        });

    } catch (err) {
        console.error('Error loading receipts:', err);
        if (introDiv) {
            introDiv.innerHTML = `<p style="color:var(--accent-red); background: rgba(255,0,0,0.1); padding: 1rem; border-radius: 8px;">${t('receipts.error.data')}</p>`;
        }
    }
}


function renderReceipt(r) {
    const i18n = window.KK26_I18N;
    const t = (key, values) => i18n ? i18n.t(key, values) : key;
    const div = document.createElement('div');
    div.className = 'receipt';
    div.dataset.group = r.group;

    const data = window.receiptsData || window.KK26_PROJECTS || {};
    const fundedItems = r.items.filter(it => it.funded);
    const unfundedItems = r.items.filter(it => !it.funded);
    const fundedProjects = Array.isArray(data.project_receipts)
        ? data.project_receipts.filter(project => project.is_funded)
        : [];
    const fundedProjectCount = fundedProjects.length;
    const fundedBudget = fundedProjects.reduce((sum, project) => (
        sum + Number(project.total_cost || project.total_raised || 0)
    ), 0);
    const fundedNote = fundedProjectCount
        ? t('receipts.fundedNote', { count: fundedProjectCount, budget: formatReceiptCHF(fundedBudget, 0) })
        : t('receipts.fundedNoteDefault');

    const fundedRows = fundedItems
        .map(it => `
            <tr class="item-row funded">
                <td class="item-title col-title" data-project="${it.project_id}">${truncate(it.title, 40)}</td>
                <td class="item-vote col-vote">${getVoteLabel(it.vote)}</td>
                <td class="item-amount col-amount">${formatReceiptCHF(it.amount, 2)}</td>
            </tr>
        `).join('');

    const unfundedRows = unfundedItems
        .map(it => `
            <tr class="item-row unfunded">
                <td class="item-title col-title" data-project="${it.project_id}">${truncate(it.title, 34)}</td>
                <td class="item-vote col-vote">${getVoteLabel(it.vote)}</td>
                <td class="item-amount col-amount">–</td>
            </tr>
        `).join('');

    const code = `SKKG-KK26-${r.group}-${r.voter_id.replace(/\s+/g, '')}`;

    div.innerHTML = `
        <div class="receipt-edge top"></div>
        <div class="receipt-body voter-receipt">
            <div class="receipt-header">
                <div class="receipt-logo">kk26</div>
                <div class="receipt-subtitle">Kultur Komitee Winterthur</div>
                <div class="receipt-meta-line">
                    <span>${t('receipts.group', { group: r.group })}</span>
                    <span>${r.voter_id}</span>
                </div>
            </div>

            <div class="receipt-divider dashed"></div>

            <table class="receipt-table">
                <thead>
                    <tr>
                        <th class="receipt-section-title col-title" colspan="3">${t('receipts.section.funded')}</th>
                    </tr>
                    <tr>
                        <th class="col-title">${t('receipts.table.article')}</th>
                        <th class="col-vote">${t('receipts.table.vote')}</th>
                        <th class="col-amount">${t('receipts.table.amount')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${fundedRows}
                </tbody>
            </table>

            <div class="receipt-divider"></div>

            <div class="receipt-totals">
                <div class="receipt-total-row">
                    <span>${t('receipts.total.projectCount')}</span>
                    <strong>${r.funded_count}</strong>
                </div>
                <div class="receipt-total-row grand">
                    <span>${t('receipts.total.chf')}</span>
                    <strong>${formatReceiptCHF(r.total_spent, 2)}</strong>
                </div>
            </div>

            <div class="receipt-divider"></div>

            <div class="receipt-method">Method of Equal Shares</div>
            <div class="receipt-time">21.03.2026 10:06</div>
            <p class="receipt-note">${fundedNote}</p>

            <div class="receipt-divider dashed"></div>

            <div class="unfunded-section">
                <table class="receipt-table unfunded-table">
                    <thead>
                        <tr>
                            <th class="receipt-section-title col-title" colspan="3">${t('receipts.section.unfunded')}</th>
                        </tr>
                        <tr>
                            <th class="col-title">${t('receipts.table.article')}</th>
                            <th class="col-vote">${t('receipts.table.vote')}</th>
                            <th class="col-amount">${t('receipts.table.amount')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${unfundedRows}
                    </tbody>
                </table>
            </div>

            <div class="receipt-divider double"></div>

            <div class="receipt-footer" aria-label="Method of Equal Shares">
                <span>Kultur Komitee Winterthur</span>
                <span>${t('receipts.footer.foundation')}</span>
                <span>${t('receipts.footer.thanks')}</span>
                <span class="receipt-barcode" aria-hidden="true">||||||||||||||||||||</span>
                <span class="receipt-code">${code}</span>
            </div>
        </div>
        <div class="receipt-edge bottom"></div>
    `;

    return div;
}

function formatCompactCHF(value) {
    return window.KK26_I18N
        ? window.KK26_I18N.formatNumber(value, { maximumFractionDigits: 0 })
        : Number(value || 0).toLocaleString('de-CH', { maximumFractionDigits: 0 });
}

function formatReceiptCHF(value, digits) {
    if (window.KK26_I18N) {
        return window.KK26_I18N.formatNumber(value, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        });
    }
    return Number(value || 0).toLocaleString('de-CH', {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    }).replace(/’/g, "'");
}

function truncate(str, n) {
    if (!str) return '';
    return (str.length > n) ? str.slice(0, n - 3) + '&hellip;' : str;
}

function getVoteLabel(vote) {
    return {
        "Ja": "✓✓",
        "EherJa": "✓",
        "EherNein": "✗",
        "Nein": "✗✗",
        "": "–"
    }[vote] || vote;
}

function filterReceipts(group) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.group === group);
    });
    document.querySelectorAll('.receipt').forEach(card => {
        if (group === 'ALL' || card.dataset.group === group) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    (window.KK26_DATA_READY || Promise.resolve())
        .then(loadReceipts)
        .catch(err => {
            console.error('Error loading public data:', err);
            const introDiv = document.getElementById('intro-text');
            if (introDiv) {
                const message = window.KK26_I18N
                    ? window.KK26_I18N.t('receipts.error.publicData')
                    : 'Fehler beim Laden der öffentlichen Daten.';
                introDiv.innerHTML = `<p style="color:var(--accent-red); background: rgba(255,0,0,0.1); padding: 1rem; border-radius: 8px;">${message}</p>`;
            }
        });
});
