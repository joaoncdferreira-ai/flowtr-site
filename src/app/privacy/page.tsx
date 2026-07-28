import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Flowtr recolhe, usa e protege os teus dados — incluindo localização GPS, percursos e territórios.",
  alternates: { canonical: "/privacy" },
};

// Última revisão material da política. Atualizar a cada alteração de conteúdo.
const LAST_UPDATED = "28 de julho de 2026";
const LAST_UPDATED_EN = "July 28, 2026";

const PROCESSORS: Array<[service: string, purpose: string, data: string, region: string]> = [
  [
    "Google Firebase (Authentication, Firestore, Cloud Functions, Cloud Messaging, Crashlytics, Analytics, App Check)",
    "Backend, contas, notificações push, relatórios de erro e analytics",
    "Email, identificador de conta, alcunha, tokens de dispositivo, eventos de uso, registos de erro, percursos GPS e territórios",
    "UE (europe-west1) — Google Ireland",
  ],
  [
    "PostHog (cloud europeia)",
    "Product analytics e session replay com máscara total de textos e imagens",
    "Eventos de uso, identificador de utilizador, gravações de sessão mascaradas",
    "UE",
  ],
  [
    "Mapbox",
    "Mapas na app e no vídeo de partilha",
    "Pedidos de mapa (coordenadas aproximadas do viewport), telemetria do SDK",
    "EUA",
  ],
  [
    "Amazon Web Services (Lambda + S3)",
    "Geração do vídeo de partilha de corridas",
    "Percurso GPS da corrida e estatísticas; o vídeo resultante fica numa URL pública",
    "UE (Irlanda, eu-west-1)",
  ],
  [
    "Cloudinary",
    "Alojamento das fotografias de perfil",
    "Fotografia de perfil",
    "UE/EUA",
  ],
  [
    "OpenStreetMap Foundation (Nominatim)",
    "Geocodificação inversa (nome da cidade a partir de coordenadas)",
    "Coordenadas pontuais",
    "UE",
  ],
  [
    "Google Sign-In / Sign in with Apple",
    "Autenticação",
    "Identidade da conta (email, nome)",
    "—",
  ],
  [
    "Vercel + Resend (site flowtr.app)",
    "Alojamento, métricas técnicas do site e lista de lançamento",
    "Email (se o forneceres), endereço IP e dados técnicos do pedido",
    "UE/EUA",
  ],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-9 border-t border-border pt-7">
      <h2 className="font-display text-lg">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-fg-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main id="main-content" className="flex flex-1 items-center px-4 py-14 sm:px-6">
      <article className="surface mx-auto w-full max-w-3xl p-7 sm:p-10">
        <p className="font-display text-sm text-coral">Flowtr</p>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-fg-dim">
          Última atualização: {LAST_UPDATED} ·{" "}
          <a className="text-coral hover:underline" href="#english">
            English version below
          </a>
        </p>
        <p className="mt-5 text-base leading-7 text-fg-muted sm:text-lg">
          A Flowtr é um jogo de fitness em que corres na vida real para
          conquistar território num mapa partilhado. Isso significa que a
          localização é o coração do produto — e é por isso que esta política
          explica, sem rodeios, o que recolhemos, porquê, e o que é visível
          para outros jogadores.
        </p>

        <Section title="Quem é responsável">
          <p>
            O serviço Flowtr é operado a partir de Portugal. Para qualquer
            questão de privacidade ou pedido legal, o contacto é{" "}
            <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
              support@flowtr.app
            </a>
            . Respondemos por email a pedidos formais, incluindo os exercícios
            de direitos descritos abaixo.
          </p>
        </Section>

        <Section title="Dados que recolhemos">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-fg">Conta</strong> — email, nome/alcunha e,
              se iniciares sessão com Google ou Apple, a identidade dessa conta.
            </li>
            <li>
              <strong className="text-fg">Localização precisa (GPS)</strong> —
              recolhida <strong className="text-fg">durante corridas, com a app em
              uso</strong> (no Android através de um serviço em primeiro plano
              com notificação visível). Não recolhemos localização em background
              fora de corridas.
            </li>
            <li>
              <strong className="text-fg">Percursos e territórios</strong> — o
              trajeto das tuas corridas e os polígonos de território que
              conquistas ficam guardados na tua conta.
            </li>
            <li>
              <strong className="text-fg">Fotografia de perfil</strong> — se
              escolheres carregar uma.
            </li>
            <li>
              <strong className="text-fg">Conteúdo de jogo</strong> — alcunhas,
              nomes de desafios, denúncias e bloqueios que submetas.
            </li>
            <li>
              <strong className="text-fg">Dados de utilização e diagnóstico</strong>{" "}
              — eventos de uso (analytics), gravações de sessão com máscara
              total de textos e imagens (session replay), relatórios de erro e
              desempenho, identificadores de dispositivo e tokens de notificação.
              Analytics, diagnóstico e replay só são recolhidos se os ativares.
            </li>
          </ul>
        </Section>

        <Section title="O que é visível para outros jogadores">
          <p>
            É a natureza do jogo: os{" "}
            <strong className="text-fg">polígonos de território que conquistas
            são visíveis a outros jogadores</strong> no mapa, associados à tua
            alcunha, cor e foto de perfil. Rankings e desafios mostram a tua
            alcunha e estatísticas de jogo. Pensa nisso antes de correr em
            locais que não queres associar a ti (por exemplo, à volta de casa).
          </p>
          <p>
            Se usares a partilha de vídeo, o vídeo é gerado nos nossos
            servidores (AWS) a partir do percurso dessa corrida e fica
            acessível através de uma <strong className="text-fg">URL pública</strong>{" "}
            enquanto existir — qualquer pessoa com o link consegue vê-lo. Podes
            pedir a remoção de um vídeo por email.
          </p>
        </Section>

        <Section title="Para que usamos os dados">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-fg">Prestar o serviço</strong> (execução do
              contrato) — registar corridas, calcular territórios, rankings,
              desafios, partilha.
            </li>
            <li>
              <strong className="text-fg">Segurança e anti-batota</strong>{" "}
              (interesse legítimo) — validação de corridas no servidor,
              moderação de denúncias e bloqueios.
            </li>
            <li>
              <strong className="text-fg">Melhorar o produto</strong>{" "}
              (consentimento) — analytics, diagnóstico e session replay
              mascarado para perceber onde a app falha ou confunde. Estão
              desligados por defeito e podes mudar a escolha nas Definições.
            </li>
            <li>
              <strong className="text-fg">Notificações push</strong>{" "}
              (consentimento via permissão do sistema) — podes desativar nas
              definições do dispositivo.
            </li>
          </ul>
          <p>Não vendemos dados pessoais nem os partilhamos para publicidade.</p>
        </Section>

        <Section title="Site e lista de lançamento">
          <p>
            O site usa a Vercel para alojamento, métricas técnicas agregadas e
            medição de desempenho. Não usamos cookies de publicidade nem
            PostHog no site. Se deixares o email na lista de lançamento, a
            Resend guarda-o para te enviarmos novidades essenciais sobre a
            disponibilidade da app. Podes pedir a remoção a qualquer momento
            através de{" "}
            <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
              support@flowtr.app
            </a>
            .
          </p>
        </Section>

        <Section title="Fornecedores (subcontratantes)">
          <p>
            Usamos fornecedores que processam dados por nossa conta, ao abrigo
            de contratos de proteção de dados. Transferências para fora da UE
            (Mapbox, Cloudinary, Vercel/Resend) assentam em cláusulas
            contratuais-tipo da Comissão Europeia.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-fg">
                  <th className="py-2 pr-4 font-semibold">Serviço</th>
                  <th className="py-2 pr-4 font-semibold">Função</th>
                  <th className="py-2 pr-4 font-semibold">Dados</th>
                  <th className="py-2 font-semibold">Região</th>
                </tr>
              </thead>
              <tbody>
                {PROCESSORS.map(([service, purpose, data, region]) => (
                  <tr key={service} className="border-b border-border align-top">
                    <td className="py-2 pr-4 text-fg">{service}</td>
                    <td className="py-2 pr-4">{purpose}</td>
                    <td className="py-2 pr-4">{data}</td>
                    <td className="py-2 whitespace-nowrap">{region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Retenção e eliminação">
          <p>
            Guardamos os dados enquanto a tua conta existir. Quando eliminas a
            conta —{" "}
            <a className="text-coral hover:underline" href="/delete-account">
              na app ou por email
            </a>{" "}
            — removemos os dados da conta dos nossos sistemas e iniciamos a
            eliminação junto dos fornecedores, sem demora injustificada. Alguns
            registos podem ser retidos apenas quando necessário para segurança,
            prevenção de fraude ou obrigações legais.
          </p>
        </Section>

        <Section title="Os teus direitos (RGPD)">
          <p>
            Tens direito de acesso, retificação, apagamento, portabilidade,
            limitação e oposição. Para exercer qualquer um, escreve para{" "}
            <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
              support@flowtr.app
            </a>
            . Tens também o direito de apresentar queixa à CNPD
            (Comissão Nacional de Proteção de Dados, cnpd.pt).
          </p>
        </Section>

        <Section title="Idade mínima">
          <p>
            A Flowtr destina-se a maiores de 16 anos. Não recolhemos
            conscientemente dados de menores de 16; se acreditas que isso
            aconteceu, contacta-nos para eliminarmos a conta.
          </p>
        </Section>

        <Section title="Alterações">
          <p>
            Se alterarmos esta política de forma relevante, avisamos na app ou
            por email antes de a alteração produzir efeitos. A data no topo
            reflete sempre a última revisão.
          </p>
        </Section>

        {/* ── English version ──────────────────────────────────────────── */}
        <div id="english" className="mt-14 border-t-2 border-border pt-10">
          <p className="font-display text-sm text-coral">Flowtr</p>
          <h2 className="font-display mt-3 text-2xl leading-tight sm:text-4xl">
            Privacy Policy (English)
          </h2>
          <p className="mt-3 text-sm text-fg-dim">Last updated: {LAST_UPDATED_EN}</p>

          <div className="mt-5 space-y-6 leading-7 text-fg-muted">
            <p>
              Flowtr is a fitness game where you run in the real world to claim
              territory on a shared map. Location is the heart of the product,
              so this policy explains plainly what we collect, why, and what
              other players can see.
            </p>
            <p>
              <strong className="text-fg">Who is responsible.</strong> Flowtr is
              operated from Portugal. Contact for any privacy matter:{" "}
              <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
                support@flowtr.app
              </a>
              .
            </p>
            <p>
              <strong className="text-fg">What we collect.</strong> Account data
              (email, display name, Google/Apple sign-in identity); precise GPS
              location <strong className="text-fg">during runs, while the app is
              in use</strong> (on Android via a foreground service with a
              visible notification — we do not collect background location
              outside runs); your run routes and claimed territory polygons; an
              optional profile photo; in-game content (nicknames, challenge
              names, reports, blocks); usage analytics, session replays with
              all text and images fully masked, crash and performance reports,
              device identifiers and push tokens.
            </p>
            <p>
              <strong className="text-fg">What other players see.</strong>{" "}
              Claimed territory polygons are visible to other players on the
              map, together with your nickname, colour and profile photo.
              Rankings and challenges show your nickname and game stats. Shared
              videos are rendered on our servers (AWS) from the run route and
              are reachable at a public URL while they exist; you can request
              removal by email.
            </p>
            <p>
              <strong className="text-fg">Why we process data.</strong> To
              provide the service (contract), for security and anti-cheat
              (legitimate interest), to improve the product via optional
              analytics, diagnostics and masked session replay (consent), and
              for push notifications (consent via the OS permission). Optional
              analytics are off by default and can be changed in Settings. We
              do not sell personal data or share it for advertising.
            </p>
            <p>
              <strong className="text-fg">Website and launch list.</strong>{" "}
              Vercel hosts the site and provides aggregate technical and
              performance metrics. We do not use advertising cookies or
              PostHog on the website. If you submit your email, Resend stores it
              so we can send essential launch updates. You can request removal
              at any time by emailing support.
            </p>
            <p>
              <strong className="text-fg">Processors.</strong> Google Firebase
              (EU region — backend, auth, push, crash, analytics), PostHog (EU
              cloud — analytics and masked session replay), Mapbox (US — maps),
              AWS Lambda/S3 (EU Ireland — share-video rendering), Cloudinary
              (profile photos), OpenStreetMap Foundation/Nominatim (EU — reverse
              geocoding), Google Sign-In / Sign in with Apple (authentication),
              Vercel + Resend (website and transactional email). Transfers
              outside the EU rely on the European Commission&apos;s Standard
              Contractual Clauses.
            </p>
            <p>
              <strong className="text-fg">Retention and deletion.</strong> We
              keep data while your account exists. Deleting your account (in
              the app, or via{" "}
              <a className="text-coral hover:underline" href="/delete-account">
                flowtr.app/delete-account
              </a>
              ) removes account data from our systems and triggers deletion at
              our providers without undue delay. Some records may be retained
              only where required for security, fraud prevention or legal
              obligations.
            </p>
            <p>
              <strong className="text-fg">Your rights (GDPR).</strong> Access,
              rectification, erasure, portability, restriction and objection —
              email{" "}
              <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
                support@flowtr.app
              </a>
              . You may lodge a complaint with the Portuguese supervisory
              authority (CNPD, cnpd.pt).
            </p>
            <p>
              <strong className="text-fg">Minimum age.</strong> Flowtr is
              intended for users aged 16 and over.
            </p>
            <p>
              <strong className="text-fg">Changes.</strong> If we materially
              change this policy we will notify you in the app or by email
              before the change takes effect.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
