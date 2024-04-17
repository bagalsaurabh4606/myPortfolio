
onLoad();

function onLoad()
{
 
  displayItem();
 
}




function displayItem() {
  let containerElement = document.querySelector(".main_container");
  if (!containerElement) {
    return;
  }
  let innerHTML = "";
  certificates.forEach((item) => {
    innerHTML += `
<a href="${item.links}" target="_blank" class="link"><div class="cert_container">

<div class="title_container">
<div class="logo">
<img src="${item.image}" alt="" class="company_logo">
</div>
<div class="title">
${item.certificate_name}
</div>
</div>
<div class="cert_info" target="__blank">${item.cert_info}</div>
<div class="issued_date">Issued date:
${item.issued_data}
</div>
</div>
</a>
`;
  });
  containerElement.innerHTML = innerHTML;
}