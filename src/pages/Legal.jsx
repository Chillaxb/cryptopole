import { useLanguage } from '../context/LanguageContext'

export default function Legal() {
  const { language } = useLanguage()

  const content = language === 'fr' ? {
    title: 'Mentions légales',
    updated: 'Dernière mise à jour : 17 octobre 2026',
    sections: [
      {
        heading: 'Éditeur du site',
        paragraphs: [
          'Le site cryptopole.fr est édité par A-X Software, société par actions simplifiée au capital de 1 000 €, immatriculée au RCS de Paris sous le numéro 929 602 365, dont le siège social est situé 122 rue Amelot, 75011 Paris, France.',
          'Directeur de la publication : Axel Benoist, Président.',
          'Contact : contact@cryptopole.fr'
        ]
      },
      {
        heading: 'Activité présentée',
        paragraphs: [
          "Ce site présente l'activité de conseil d'Axel Benoist, entrepreneur individuel exerçant sous le nom commercial Cryptopole (SIREN 840 423 776), ainsi que les réalisations d'A-X Software."
        ]
      },
      {
        heading: 'Hébergement',
        paragraphs: [
          'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.',
          "Nom de domaine enregistré auprès d'OVH SAS, 2 rue Kellermann, 59100 Roubaix, France."
        ]
      },
      {
        heading: 'Propriété intellectuelle',
        paragraphs: [
          "Les contenus de ce site (textes, visuels, logo Cryptopole) sont la propriété d'A-X Software, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.",
          "Les marques et logos d'entreprises tierces appartiennent à leurs titulaires respectifs. Ils illustrent des expériences professionnelles."
        ]
      },
      {
        heading: 'Données personnelles',
        paragraphs: [
          'Responsable du traitement : A-X Software.'
        ],
        items: [
          "Ce site ne dépose aucun cookie de suivi et n'utilise aucun outil de mesure d'audience.",
          'Votre choix de langue est conservé dans votre navigateur, sans être transmis.',
          'Les polices de caractères sont chargées depuis les serveurs de Google Fonts, qui reçoivent votre adresse IP.',
          "L'hébergeur Vercel conserve des journaux techniques (adresse IP, pages consultées) pour la sécurité du service.",
          "Si vous nous écrivez, votre message sert uniquement à vous répondre. Il n'est jamais transmis à un tiers."
        ],
        footer: "Vous pouvez demander l'accès, la rectification ou l'effacement de vos données à contact@cryptopole.fr. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr)."
      }
    ]
  } : {
    title: 'Legal Notice',
    updated: 'Last updated: October 17, 2026',
    sections: [
      {
        heading: 'Publisher',
        paragraphs: [
          'The website cryptopole.fr is published by A-X Software, a French simplified joint-stock company (SAS) with a share capital of €1,000, registered with the Paris Trade and Companies Register under number 929 602 365, with its registered office at 122 rue Amelot, 75011 Paris, France.',
          'Publication director: Axel Benoist, President.',
          'Contact: contact@cryptopole.fr'
        ]
      },
      {
        heading: 'Business presented',
        paragraphs: [
          'This website presents the consulting activity of Axel Benoist, sole trader operating under the trade name Cryptopole (SIREN 840 423 776), as well as the work of A-X Software.'
        ]
      },
      {
        heading: 'Hosting',
        paragraphs: [
          'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.',
          'Domain name registered with OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.'
        ]
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'The content of this website (text, visuals, Cryptopole logo) is the property of A-X Software unless stated otherwise. Any reproduction without written permission is prohibited.',
          'Third-party trademarks and logos belong to their respective owners. They illustrate professional experience.'
        ]
      },
      {
        heading: 'Personal data',
        paragraphs: [
          'Data controller: A-X Software.'
        ],
        items: [
          'This website sets no tracking cookies and uses no audience measurement tool.',
          'Your language choice is stored in your browser and never transmitted.',
          'Fonts are loaded from Google Fonts servers, which receive your IP address.',
          'The host, Vercel, keeps technical logs (IP address, pages viewed) for service security.',
          'If you write to us, your message is only used to reply to you. It is never shared with third parties.'
        ],
        footer: 'You can request access to, correction or deletion of your data at contact@cryptopole.fr. You can also lodge a complaint with the CNIL, the French data protection authority (cnil.fr).'
      }
    ]
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          {content.title}
        </h1>
        <p className="text-sm text-slate-600 mb-12">{content.updated}</p>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{section.heading}</h2>
              <div className="space-y-2 text-slate-700 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="list-disc pl-5 space-y-1">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.footer && <p>{section.footer}</p>}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
