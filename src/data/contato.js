export const WHATSAPP_NUMERO = '5515996890091'

export const linkWhatsapp = (mensagem = 'Olá! Gostaria de fazer um orçamento.') =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`