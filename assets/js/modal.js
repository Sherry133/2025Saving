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
                <li class="faq-item" data-question="Getting Started Steps"
                    data-answer="Select a school or two. Contact School Savings at support@schoolsavings.com to register. There is only one bank sponsor per school. All bank accounts are at the sponsor's bank. Minimum deposit is $.01.">
                    <a href="#" class="faq-link">How do I get started?</a>
                <li class="faq-item" data-question="Pricing"
                    data-answer="Reasonable pricing allows all students to participate. Teachers and parents with children in School Savings may also make deposits at school. Request a quote. https://ww2.schoolsavings.com/quote.html">
                    <a href="#" class="faq-link">How much does it cost?</a>
                </li>

                <li class="faq-item" data-question="Volunteers Manage the Program"
                    data-answer=" Volunteers selected by the parent teacher organization manage the program.">
                    <a href="#" class="faq-link">Who runs the program?</a>

                <li class="faq-item" data-question="School Banking Schedule"
                    data-answer="School Banking begins on September 1st of each year and ends the second week of June."Schools may choose one day or multiple days during the week to make deposits.>
                    <a href="#" class="faq-link">When does School Banking occur?</a>
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
			const question = this.parentElement.dataset.question;
			const answer = this.parentElement.dataset.answer;
			showModal(question, answer);
		});
	});

	function showModal(question, answer) {
		modalQuestion.textContent = question;
		modalAnswer.textContent = answer;
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
