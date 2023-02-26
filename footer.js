const footer = document.querySelector('footer');
footer.classList.add('footer');

const image = document.createElement('img');
image.src = '/images/logoDTP.png';
image.alt = 'Danube Transnational Programme logo';
image.classList.add('dtpLogo');

const footerText = document.createElement('div');
footerText.classList.add('funding');
footerText.textContent = 'Project is co-funded by the European Union funds (ERDF,IPA)';

footer.appendChild(image);
footer.appendChild(footerText);