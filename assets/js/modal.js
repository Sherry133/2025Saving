document.addEventListener('DOMContentLoaded', function () {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (!footerPlaceholder) {
        console.error('Footer placeholder not found.');
        return;
    }

    footerPlaceholder.innerHTML = `

<footer id="footer">

    <ul class="actions special">
        <li>
            <h3>Learn
                <span class="now">Now</span> from
                Frequently-Asked
                Questions!</h3>
        </li>
    </ul>
    <section class="links">


        <div>
            <h3>Getting Started</h3>
            <ul class="faq-list">
                <li class="faq-item" data-question="Getting Started Steps for Banks &amp; Credit Unions"
                    data-answer-html="<div class='faq-accordion'><details><summary><strong>1.</strong> Select local schools to implement</summary><p>Select a local school and notify School Savings of your intent to implement at support@schoolsavings.com. All School Savings accounts are at the sponsor institution.</p></details><details><summary><strong>2.</strong> Send Enrollment Packets home</summary><p>Send Account Enrollment Packets home with students. Sponsors may offer saving and/or checking accounts. Accounts may be in the student&#39;s name or be a custodial account.</p></details><details><summary><strong>3.</strong> Ask PTA/PTO to recruit Volunteers</summary><p>Ask the PTA/PTO President to select Volunteers to collect student deposits and deliver them to a participating bank branch. Bankers may also collect deposits at school. Request Volunteer training from School Savings.</p></details><details><summary><strong>4.</strong> Sign the Agreement &amp; get credentials</summary><p>Request and sign a School Savings Agreement. Receive School Savings login credentials. Call 888-787-7728 or email support@schoolsavings.com.</p></details><details><summary><strong>5.</strong> Advertise First Deposit Day!</summary><p>Offering small savings incentives and having contests makes saving fun! Advertise your First Deposit Day CONTEST to students, parents and the media to FIRE-UP participation.</p></details></div>">
                    <a href="#" class="faq-link">For Banks and Credit Unions</a>
                <li class="faq-item" data-question="Pricing"
                    data-answer="Reasonable pricing allows all students to participate. Teachers and parents with children in School Savings may also make deposits at school."
                    data-action-url="quote.html"
                    data-action-label="Request a Quote">
                    <a href="#" class="faq-link">How much does it cost?</a>
                </li>

                <li class="faq-item" data-question="Volunteers Manage the Program"
                    data-answer=" Volunteers selected by the parent teacher organization manage the program. School Banking begins on September 1st of each year and ends the second week of June. Schools may choose one day or multiple days during the week to make deposits.">
                    <a href="#" class="faq-link">Who runs the program?</a>

                <li class="faq-item" data-question="Getting Started Steps for Schools"
                    data-answer-html="<div class='faq-accordion'><details><summary><strong>1.</strong> Confirm participation with your bank partner</summary><p>Confirm participation to bank or credit union partner.</p></details><details><summary><strong>2.</strong> Invite volunteers or staff to coordinate</summary><p>Invite volunteers or staff members to coordinate program.</p></details><details><summary><strong>3.</strong> Provide Internet-ready computer access</summary><p>Provide access to an Internet-ready computer once weekly before class or during lunch.</p></details></div>">
                    <a href="#" class="faq-link">Getting Started for Schools</a>
            </ul>
        </div>

         <div>
            <h3>Security</h3>
            <ul class="faq-list">
                <li class="faq-item" data-question="Deposit security?"
                    data-answer="School Savings meets the same security requirements as banks. It is monitored by the Office of the Comptroller of the Currency.">
                    <a href="#" class="faq-link">How secure are deposits?</a>

                <li class="faq-item" data-question="How do deposits get to the bank?"
                    data-answer="Immediately after each bank session, a banking Deposit Report is created. Volunteers use the Deposit Report to balance School Savings deposits ensuring each deposit is accounted for that session. The lead Volunteer appointed by the parent teacher organization brings the Deposit Report and deposits to the participating bank branch.">
                    <a href="#" class="faq-link">How do deposits get to the bank?</a>
                </li>
                                <li class="faq-item" data-question="Can withdrawals be made at school?"
                    data-answer="Withdrawals cannot be made at school. Participants must go to the bank branch or use an accepted form of withdrawal such as online or the standard withdrawal procedure at the participating bank.">
                     <a href="#" class="faq-link">How are withdrawals made?</a></li>

                                                     <li class="faq-item" data-question="How can I be sure all deposits have been credited to my account?"
                    data-answer="Participants receive a monthly or quarterly bank statement depending on the participating bank's reporting procedures.">
                     <a href="#" class="faq-link">Bank Statements</a></li>

            </ul>
        </div>

         <div>
            <h3>Miscellaneous</h3>
            <ul class="faq-list">
                <li class="faq-item" data-question="Is interest paid on the account?"
                    data-answer="Yes, interest is paid on the saving account per the bank's prevailing rate.">
                    <a href="#" class="faq-link">Do the accounts pay interest?</a>


                <li class="faq-item" data-question="Are the School Savings accounts FDIC insured?"
                    data-answer=" Yes, School Savings accounts are FDIC-insured saving or checking accounts at USA banks and credit unions.">
                    <a href="#" class="faq-link">Are the accounts FDIC insured?</a>
                </li>
                <li class="faq-item" data-question="How are deposits credited to student accounts?"
                    data-answer="Because School Savings is processor for the Federal Reserve Bank, deposits are electronically deposited into student accounts through the Federal Reserve Bank which avoids manual deposit posting by branch tellers.">
                    <a href="#" class="faq-link">Electronic Deposit Posting</a></li>

                <li class="faq-item" data-question="When are deposits made at school available?"
                    data-answer="Currently deposits are available within two days. In the near future, School Savings will be an Authorized FedNow Service provider and as such be able to make deposits available immediately AKA Instant Payments!">
                    <a href="#" class="faq-link">Deposits Availability</a>
            </ul>
        </div>

        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id="modal-question" class="modal-question"></div>
                <div id="modal-answer" class="modal-answer"></div>
            </div>
        </div>
    </section>
    <ul class="contact-icons">
        <li class="icon solid fa-home">
           601 Union St, Seattle, WA 98101
           </li>
        <li class="icon solid fa-phone">
            <a href="#">(888)
                787-7728</a>
        </li>
        <li class="icon solid fa-envelope">
            <a href="#">support@schoolsavings.com</a>
        </li>
    </ul>
    <p class="copyright">&copy;
        IFSG Inc. All rights
        reserved.</p>


 </footer>

    `;

    const faqLinks = document.querySelectorAll('.faq-link');
    const modal = footerPlaceholder.querySelector('.modal');
    const modalQuestion = footerPlaceholder.querySelector('#modal-question');
    const modalAnswer = footerPlaceholder.querySelector('#modal-answer');
    const closeBtn = footerPlaceholder.querySelector('.close');

    faqLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const item = this.parentElement;
            showModal(
                item.dataset.question,
                item.dataset.answer,
                item.dataset.actionUrl,
                item.dataset.actionLabel,
                item.dataset.answerHtml
            );
        });
    });

    function showModal(question, answer, actionUrl, actionLabel, answerHtml) {
        modalQuestion.textContent = question;
        // answerHtml is developer-set only, never user input
        if (answerHtml) {
            modalAnswer.innerHTML = answerHtml;
        } else {
            modalAnswer.textContent = answer;
        }

        // Remove any previously injected action button
        const existing = modal.querySelector('.modal-action-btn');
        if (existing) existing.remove();

        if (actionUrl && actionLabel) {
            const btn = document.createElement('a');
            btn.href = actionUrl;
            btn.textContent = actionLabel;
            btn.className = 'button primary modal-action-btn';
            btn.style.cssText = 'display:block; width:fit-content; margin:1em auto 0; text-align:center;';
            modal.querySelector('.modal-content').appendChild(btn);
        }

        modal.style.display = 'block';
    }

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
