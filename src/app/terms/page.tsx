import type { Metadata } from "next";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description:
    "As regras de utilização da Flowtr — o jogo em que corres na vida real para conquistar território.",
  alternates: {
    canonical: "/terms",
    languages: { "pt-PT": "/terms", en: "/en/terms", es: "/es/terms" },
  },
};

// Última revisão material dos termos. Atualizar a cada alteração de conteúdo.
const LAST_UPDATED = "28 de julho de 2026";
const LAST_UPDATED_EN = "July 28, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-9 border-t border-border pt-7">
      <h2 className="font-display text-lg">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-fg-muted">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main id="main-content" className="flex flex-1 items-center px-4 py-14 sm:px-6">
      <article className="surface mx-auto w-full max-w-3xl p-7 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="font-display text-sm text-coral">Flowtr</p>
          <LanguageSwitcher locale="pt" suffix="/terms" />
        </div>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          Termos de Utilização
        </h1>
        <p className="mt-3 text-sm text-fg-dim">
          Última atualização: {LAST_UPDATED} ·{" "}
          <a className="text-coral hover:underline" href="#english">
            English version below
          </a>
        </p>
        <p className="mt-5 text-base leading-7 text-fg-muted sm:text-lg">
          Estes termos regulam a utilização da app e do site Flowtr. Ao criar
          conta ou usar o serviço, aceitas estes termos. O serviço é operado a
          partir de Portugal; contacto:{" "}
          <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
            support@flowtr.app
          </a>
          .
        </p>

        <Section title="1. Elegibilidade">
          <p>
            Tens de ter <strong className="text-fg">pelo menos 16 anos</strong>{" "}
            para usar a Flowtr. Se descobrirmos uma conta de alguém com menos
            de 16 anos, eliminamo-la.
          </p>
        </Section>

        <Section title="2. A tua conta">
          <p>
            Uma conta por pessoa, com dados verdadeiros. És responsável pelo
            que acontece na tua conta e por manteres o acesso a ela seguro.
            Podes eliminá-la a qualquer momento nas Definições da app ou em{" "}
            <Link className="text-coral hover:underline" href="/delete-account">
              flowtr.app/delete-account
            </Link>
            .
          </p>
        </Section>

        <Section title="3. O jogo">
          <p>
            A Flowtr é um jogo: corres na vida real e conquistas território num
            mapa partilhado. Faz parte do jogo que{" "}
            <strong className="text-fg">outros jogadores possam ver, contestar
            e conquistar o teu território</strong> — território, pontos,
            rankings, séries e conquistas são elementos de jogo, não bens com
            valor real, e podem ser recalculados, ajustados ou repostos
            (por exemplo, para corrigir erros, combater batota ou em fases
            beta).
          </p>
          <p>
            As corridas são validadas automaticamente no servidor. Corridas com
            sinais de manipulação (GPS forjado, velocidades impossíveis,
            teletransporte) podem ser rejeitadas sem aviso.
          </p>
        </Section>

        <Section title="4. Segurança física — a regra mais importante">
          <p>
            Corres no mundo real, por tua conta e risco.{" "}
            <strong className="text-fg">Mantém sempre a atenção no que te
            rodeia</strong>: trânsito, peões, obstáculos, condições do piso e da
            meteorologia. Respeita o código da estrada e a propriedade privada.
            Não olhes para o telemóvel em movimento em zonas com trânsito. A
            Flowtr não é aconselhamento médico — se tens dúvidas sobre a tua
            condição física, fala com um médico antes de correr.
          </p>
        </Section>

        <Section title="5. Conduta">
          <p>É proibido:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Fazer batota — falsificar localização (GPS spoofing), usar
              veículos em corridas a pé, automatizar ou manipular o jogo;
            </li>
            <li>
              Assediar, ameaçar ou fazer-te passar por outra pessoa; usar
              alcunhas, nomes de desafios ou conteúdos ofensivos ou ilegais;
            </li>
            <li>
              Interferir com o serviço — sondar, sobrecarregar ou contornar as
              proteções técnicas;
            </li>
            <li>Usar a Flowtr para qualquer fim ilegal.</li>
          </ul>
          <p>
            Podes denunciar e bloquear outros jogadores na app. Violações podem
            levar a remoção de conteúdo, perda de elementos de jogo, suspensão
            ou encerramento da conta.
          </p>
        </Section>

        <Section title="6. Conteúdo teu e nosso">
          <p>
            O conteúdo que crias no jogo (alcunha, foto, nomes de desafios)
            continua teu; dás-nos uma licença mundial e gratuita para o
            alojar, mostrar e processar na medida necessária para operar o
            serviço (por exemplo, mostrar o teu território e alcunha a outros
            jogadores). Podemos remover conteúdo que viole estes termos.
          </p>
          <p>
            A app, a marca, o design e o código da Flowtr são nossos ou dos
            nossos licenciantes. Os mapas são fornecidos pela Mapbox e por
            colaboradores do OpenStreetMap, sujeitos aos termos deles.
          </p>
        </Section>

        <Section title="7. Privacidade">
          <p>
            O tratamento de dados pessoais — incluindo localização GPS,
            percursos e o que é visível para outros jogadores — está descrito
            na{" "}
            <Link className="text-coral hover:underline" href="/privacy">
              Política de Privacidade
            </Link>
            .
          </p>
        </Section>

        <Section title="8. Disponibilidade e alterações do serviço">
          <p>
            A Flowtr está em desenvolvimento ativo. O serviço é atualmente
            fornecido gratuitamente: podemos alterar, suspender ou descontinuar
            funcionalidades e não garantimos disponibilidade contínua. Se
            introduzirmos alterações relevantes a estes termos, avisamos na app
            ou por email antes de produzirem efeitos.
          </p>
        </Section>

        <Section title="9. Responsabilidade">
          <p>
            Na máxima medida permitida pela lei, a Flowtr não responde por
            danos indiretos nem por danos resultantes da tua atividade física,
            de imprecisões de GPS/mapas ou de indisponibilidade do serviço.
            Nada nestes termos limita direitos que a lei portuguesa e europeia
            de proteção do consumidor te atribua imperativamente, nem a
            responsabilidade por dolo ou negligência grosseira.
          </p>
        </Section>

        <Section title="10. Lei aplicável e foro">
          <p>
            Estes termos regem-se pela lei portuguesa, com foro nos tribunais
            portugueses. Se fores consumidor na UE, beneficias também das
            proteções imperativas do teu país de residência. Quando aplicável,
            podes também recorrer a uma entidade de resolução alternativa de
            litígios de consumo competente.
          </p>
        </Section>

        <Section title="11. Contacto">
          <p>
            Flowtr · Portugal ·{" "}
            <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
              support@flowtr.app
            </a>{" "}
            (também para notificações legais).
          </p>
        </Section>

        {/* ── English version ──────────────────────────────────────────── */}
        <div id="english" className="mt-14 border-t-2 border-border pt-10">
          <p className="font-display text-sm text-coral">Flowtr</p>
          <h2 className="font-display mt-3 text-2xl leading-tight sm:text-4xl">
            Terms of Use (English)
          </h2>
          <p className="mt-3 text-sm text-fg-dim">Last updated: {LAST_UPDATED_EN}</p>

          <div className="mt-5 space-y-6 leading-7 text-fg-muted">
            <p>
              These terms govern your use of the Flowtr app and website. By
              creating an account or using the service you accept them. Flowtr
              is operated from Portugal; contact:{" "}
              <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
                support@flowtr.app
              </a>
              .
            </p>
            <p>
              <strong className="text-fg">1. Eligibility.</strong> You must be
              at least 16 years old to use Flowtr.
            </p>
            <p>
              <strong className="text-fg">2. Your account.</strong> One account
              per person, with accurate details. You are responsible for
              activity on your account. You can delete it at any time in the
              app&apos;s Settings or at{" "}
              <Link className="text-coral hover:underline" href="/delete-account">
                flowtr.app/delete-account
              </Link>
              .
            </p>
            <p>
              <strong className="text-fg">3. The game.</strong> Flowtr is a
              game: you run in the real world to claim territory on a shared
              map. Other players can see, contest and take your territory —
              territory, points, rankings, streaks and achievements are game
              elements, not property with real-world value, and may be
              recalculated, adjusted or reset (e.g. to fix errors, fight
              cheating, or during beta). Runs are validated server-side;
              runs showing signs of manipulation (GPS spoofing, impossible
              speeds, teleporting) may be rejected without notice.
            </p>
            <p>
              <strong className="text-fg">4. Physical safety — the most
              important rule.</strong> You run in the real world at your own
              risk. Always stay aware of your surroundings — traffic,
              pedestrians, obstacles, surface and weather. Obey traffic rules
              and respect private property. Don&apos;t look at your phone while
              moving in trafficked areas. Flowtr is not medical advice; consult
              a doctor if you have concerns about your fitness.
            </p>
            <p>
              <strong className="text-fg">5. Conduct.</strong> No cheating
              (location spoofing, vehicles on foot-runs, automation), no
              harassment or impersonation, no offensive or unlawful nicknames,
              challenge names or content, no interfering with the service, no
              unlawful use. Violations may lead to content removal, loss of
              game elements, suspension or termination. You can report and
              block other players in the app.
            </p>
            <p>
              <strong className="text-fg">6. Content.</strong> Content you
              create in the game remains yours; you grant us a worldwide,
              royalty-free licence to host, display and process it as needed to
              operate the service. We may remove content that violates these
              terms. The Flowtr app, brand, design and code are ours or our
              licensors&apos;. Maps are provided by Mapbox and OpenStreetMap
              contributors under their own terms.
            </p>
            <p>
              <strong className="text-fg">7. Privacy.</strong> How we handle
              personal data — including GPS location, routes, and what other
              players can see — is described in the{" "}
              <Link className="text-coral hover:underline" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              <strong className="text-fg">8. Availability and changes.</strong>{" "}
              Flowtr is in active development and is currently provided free of
              charge. We may change, suspend or discontinue features and do not
              guarantee continuous availability. We will notify you in the app
              or by email before material changes to these terms take effect.
            </p>
            <p>
              <strong className="text-fg">9. Liability.</strong> To the maximum
              extent permitted by law, Flowtr is not liable for indirect
              damages or for damages resulting from your physical activity,
              GPS/map inaccuracies, or service unavailability. Nothing in these
              terms limits rights you hold under mandatory Portuguese or EU
              consumer law, or liability for intent or gross negligence.
            </p>
            <p>
              <strong className="text-fg">10. Governing law.</strong> These
              terms are governed by Portuguese law, with jurisdiction of the
              Portuguese courts. EU consumers also keep the mandatory
              protections of their country of residence. Where applicable, you
              may also use a competent alternative consumer dispute resolution
              entity.
            </p>
            <p>
              <strong className="text-fg">11. Contact.</strong> Flowtr ·
              Portugal ·{" "}
              <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
                support@flowtr.app
              </a>{" "}
              (also for legal notices).
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
