export function shareOnWhatsApp(recipeURL) {
  // codifica la url de la receta para asegurar que se comparta correctamente
  const encodedURL = encodeURIComponent(recipeURL)

  const message = `I share with you the nutritional information of this delicious recipe! ${encodedURL}`

  // se crea el enlace de WhatsApp con el mensaje
  const whatsappLink = `https://api.whatsapp.com/send?text=${message}`

  window.open(whatsappLink) // abrir el enlace en una nueva pestaña del navegador
}
