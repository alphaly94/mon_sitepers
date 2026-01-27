src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js">

(function () { emailjs.init("yW0d3TOugv-oZHdwC"); })();

// Formulaire EmailJS
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  status.className = "form-status loading";
  status.style.display = "block";
  status.textContent = "⏳ Envoi du message...";

  if (!name || !email || !phone || !message) {
    status.className = "form-status error";
    status.textContent = "❌ Tous les champs sont obligatoires.";
    return;
  }

  emailjs.send("service_hk2mqlh", "template_cd30rti", {
    from_name: name,
    email: email,
    phone: phone,
    message: message
  })
  .then(function () {
    status.className = "form-status success";
    status.textContent = "✅ Message envoyé avec succès !";
    document.getElementById("contactForm").reset();
  })
  .catch(function (error) {
    console.error("Erreur EmailJS :", error);
    status.className = "form-status error";
    status.textContent = "❌ Erreur lors de l’envoi. Réessayez plus tard.";
  });
});

// Simulateur & prix
const models={iphone:{"iPhone 11":89,"iPhone 12":109,"iPhone 13":129,"iPhone 14":159}, samsung:{"Galaxy S21":119,"Galaxy S22":139,"Galaxy S23":169}, autre:{"Xiaomi":99,"Huawei":109,"Oppo":119}};
function loadModels(){
  const brand=document.getElementById('brand').value;
  const modelSelect=document.getElementById('model');
  modelSelect.innerHTML='<option value="">Choisir un modèle</option>';
  if(models[brand]){
    Object.keys(models[brand]).forEach(m=>{
      const opt=document.createElement('option');
      opt.value=m; opt.textContent=m;
      modelSelect.appendChild(opt);
    });
  }
}
function showPrice(){
  const brand=document.getElementById('brand').value;
  const model=document.getElementById('model').value;
  if(brand && model){
    document.getElementById('price').textContent='Prix estimé : '+models[brand][model]+' €';
  }
}
function togglePrices(id){
  const box=document.getElementById(id);
  if(!box) return;
  const isVisible=box.style.display==='block';
  document.querySelectorAll('.price-box').forEach(el=>el.style.display='none');
  if(!isVisible){
    box.style.display='block';
    box.scrollIntoView({behavior:'smooth', block:'center'});
  }
}
function toggleProduct(card) {
  // fermer les autres produits ouverts
  document.querySelectorAll('.product-card').forEach(el => {
    if (el !== card) el.classList.remove('active');
  });

  // toggle celui cliqué
  card.classList.toggle('active');
}
