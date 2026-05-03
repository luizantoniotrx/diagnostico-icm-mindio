# Diagnóstico ICM — Índice de Clareza Mental
### mind.io · Lucas Antonelli

Ferramenta de diagnóstico gratuito baseada no Método CCC/API para captura de leads e conversão para o livro/curso.

---

## Como funciona

1. Usuário acessa o site → insere o nome → responde 7 perguntas
2. Recebe resultado parcial imediatamente (sem e-mail)
3. Para desbloquear o relatório completo → fornece e-mail + WhatsApp
4. Recebe o relatório completo por e-mail automaticamente
5. Você recebe uma notificação com os dados do lead para follow-up via WhatsApp

---

## Setup — Passo a Passo

### 1. EmailJS (gratuito, 200 e-mails/mês)

1. Acesse [emailjs.com](https://www.emailjs.com/) e crie uma conta gratuita
2. Vá em **Email Services** → clique em **Add New Service** → escolha Gmail
3. Autorize sua conta do Gmail → copie o **Service ID** gerado
4. Vá em **Email Templates** → clique em **Create New Template**

---

### Template 1 — Para o Lead (relatório completo)

**Nome do template:** `lead_report`

Configure assim:

- **To Email:** `{{to_email}}`
- **Subject:** `{{to_name}}, seu Relatório ICM Completo está aqui 🧠`
- **Content (HTML):** deixe apenas `{{{report_html}}}` (três chaves = HTML sem escape)

> ⚠️ No EmailJS, use **três chaves** `{{{report_html}}}` para renderizar HTML, não duas.

Copie o **Template ID** gerado.

---

### Template 2 — Notificação para Você (lead chegou)

**Nome do template:** `lead_notify`

Configure assim:

- **To Email:** `{{to_email}}` *(esse será o seu próprio e-mail)*
- **Subject:** `🔔 Novo Lead — {{lead_name}} ({{lead_level}})`
- **Content (Text ou HTML simples):**

```
Novo lead no Diagnóstico ICM!

Nome: {{lead_name}}
E-mail: {{lead_email}}
WhatsApp: {{lead_whatsapp}}
Resultado: {{lead_level}}
Score: {{lead_score}}/28
Pilares: {{pillar_summary}}

Chame no WhatsApp agora enquanto o lead está quente!
```

Copie o **Template ID** gerado.

---

### 2. Configure o script.js

Abra o arquivo `script.js` e substitua no bloco `CONFIG` no topo:

```javascript
const CONFIG = {
  emailjs: {
    publicKey:      'SUA_PUBLIC_KEY_AQUI',       // emailjs.com > Account > Public Key
    serviceId:      'SEU_SERVICE_ID_AQUI',        // copiado no passo 1
    userTemplateId: 'SEU_TEMPLATE_LEAD_AQUI',     // Template 1 (relatório pro lead)
    lucasTemplateId:'SEU_TEMPLATE_NOTIFY_AQUI',   // Template 2 (notificação pra você)
  },
  lucasEmail: 'seu@email.com',                    // seu e-mail para receber leads
  bookUrl: 'https://link-da-pagina-do-livro.com', // link de venda do livro
};
```

**Onde encontrar a Public Key:**
emailjs.com → conta (canto superior direito) → **Account** → **Public Key**

---

### 3. Suba no GitHub

```bash
git init
git add .
git commit -m "feat: diagnóstico ICM mind.io"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/diagnostico-mental.git
git push -u origin main
```

---

### 4. Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **Add New Project**
3. Selecione o repositório `diagnostico-mental`
4. Clique em **Deploy** (não precisa configurar nada — é HTML estático)
5. Seu site estará em: `https://diagnostico-mental.vercel.app`

Para domínio personalizado (ex: `diagnostico.mind.io`):
Vercel → seu projeto → **Settings → Domains** → adicione seu domínio

---

## Estrutura de Arquivos

```
diagnostico-mental/
├── index.html      → estrutura do quiz (hero, quiz, resultado, formulário, sucesso)
├── styles.css      → design completo dark theme
├── script.js       → lógica do quiz, scoring CCC/API, geração de e-mail, EmailJS
├── vercel.json     → configuração de deploy
└── README.md       → este guia
```

---

## Como Funciona o Scoring

| Pergunta | Pilar     | A = 4pts | D = 1pt |
|----------|-----------|----------|---------|
| Q1       | Presença  | foco total | dispersão constante |
| Q2       | Captura   | sistema confiável | sem sistema |
| Q3       | Classificar | clareza total | paralisia |
| Q4       | Presença  | foco sustentado | nunca consegue |
| Q5       | Ansiedade | age rápido | estado padrão |
| Q6       | Integração| dia satisfatório | sempre exausto |
| Q7       | Conectar  | criatividade consistente | bloqueio total |

**Total:** 7 a 28 pontos

| Score | Nível |
|-------|-------|
| 7–11  | Mente em Colapso |
| 12–17 | Mente Sobrecarregada |
| 18–22 | Mente em Transição |
| 23–28 | Mente Integrada |

---

## Funil de Vendas

```
ANÚNCIO (meta/instagram)
    ↓
DIAGNÓSTICO GRATUITO (este site)
    ↓
RESULTADO PARCIAL (imediato, sem e-mail)
    ↓
CAPTURA: e-mail + WhatsApp
    ↓
E-MAIL COM RELATÓRIO COMPLETO (automático via EmailJS)
→ CTA: Comprar o Livro (R$150)
    ↓
FOLLOW-UP WHATSAPP (você, manual ou automatizado)
→ Fechar venda do Livro → Cross-sell: Curso + Consultorias (R$500)
```

---

## Automatizando o Follow-up WhatsApp

Quando você recebe a notificação de lead, você pode:

**Opção 1 (manual):** ligar/mandar WhatsApp na hora — leads quentes convertem muito mais.

**Opção 2 (automático com Make/Zapier):**
- EmailJS → Webhook → Make.com → WhatsApp Business API
- Ou: use [Typebot](https://typebot.io) ou [ManyChat](https://manychat.com) integrado ao WhatsApp

---

## Contatos e Links

| | |
|---|---|
| E-mail principal (envio) | lucas.antonelli.oficial@gmail.com |
| E-mail suporte | mindio.contato@gmail.com |
| WhatsApp | (45) 99861-3726 |
| Página de vendas do livro | https://desbloqueisuamente-mind-io.base44.app/ |
| Checkout do livro | https://payfast.greenn.com.br/wm6w6fr?ch_id=136129 |
| Site oficial mind.io | https://practical-clear-mind-flow.base44.app/ |
