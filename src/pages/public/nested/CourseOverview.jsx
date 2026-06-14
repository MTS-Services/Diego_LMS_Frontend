import { Clock, FileText, LayoutList, PhoneCall, UserCheck, Users } from 'lucide-react';

export default function CourseOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Panoramica dei corsi
          </h1>
          <div className="mt-2 h-1 w-24 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Courses Table */}
        <div className="mb-12 shadow-lg rounded-xl overflow-hidden border border-slate-200 bg-white">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-white font-semibold text-lg py-4 px-6 text-left">Corso</th>
                <th className="text-white font-semibold text-lg py-4 px-6 text-left">Descrizione</th>
                <th className="text-white font-semibold text-lg py-4 px-6 text-left">Durata</th>
                <th className="text-white font-semibold text-lg py-4 px-6 text-left">Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-slate-50">
                <td className="font-medium text-slate-900 py-4 px-6">Corso singolo</td>
                <td className="text-slate-600 py-4 px-6">
                  Il corso "Seveso III" si riferisce alla direttiva UE 2012/18/UE: si tratta di un corso singolo basato su una necessità urgente di rientrare nelle richieste della normativa
                </td>
                <td className="text-slate-600 py-4 px-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-blue-500" />
                    30 min
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    Singolo
                  </span>
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50">
                <td className="font-medium text-slate-900 py-4 px-6">Corso Avanzato Seveso</td>
                <td className="text-slate-600 py-4 px-6">
                  Il corso "Seveso III" si riferisce alla direttiva UE 2012/18/UE: si tratta di un pacchetto contenente quattro corsi erogati con cadenza trimestrale sulla nostra piattaforma
                </td>
                <td className="text-slate-600 py-4 px-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-blue-500" />
                    30 min/corso
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-white">
                    Pacchetto
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* How it works section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <LayoutList className="h-6 w-6 text-blue-600" />
            Come funziona
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mt-4">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed steps */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100">
          <div className="p-6 md:p-8">
            <div className="space-y-6">
              {detailedSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-slate-900 text-lg">{step.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{step.description}</p>
                  </div>
                  {index < detailedSteps.length - 1 && (
                    <div className="hidden md:block flex-shrink-0 text-slate-300">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <PhoneCall className="h-4 w-4" />
            <span>Contatta il team UnoSicurezza per maggiori informazioni</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Contatto",
    description: "con il team UnoSicurezza",
    icon: <Users className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Scelta del prodotto",
    description: "corso singolo o pacchetto trimestrale",
    icon: <LayoutList className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Raccolta delle esigenze",
    description: "tramite form online, o sopralluogo tecnico",
    icon: <FileText className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Realizzazione del corso personalizzato",
    description: "con logo, riferimenti aziendali, foto, video, procedure operative, manuali interni",
    icon: <UserCheck className="h-5 w-5 text-blue-500" />,
  },
];

const detailedSteps = [
  {
    title: "Contatto con il team di UnoSicurezza",
    description: "Il nostro team è a disposizione per comprendere le tue esigenze formative e normative.",
  },
  {
    title: "Scegli il prodotto che fa per te (corso singolo o pacchetto) per formazione trimestrale",
    description: "Seleziona l'opzione più adatta alla tua azienda: un corso singolo urgente o un pacchetto completo con cadenza trimestrale.",
  },
  {
    title: "Raccolta esigenze tramite form, oppure sopralluogo dei nostri tecnici",
    description: "Analizziamo le tue necessità attraverso un questionario digitale o con una visita diretta dei nostri esperti.",
  },
  {
    title: "Realizzazione del corso/corsi personalizzati con logo e riferimenti aziendali, foto video e procedure operative manuali interni",
    description: "Creiamo contenuti su misura che riflettono la tua identità aziendale, includendo materiali specifici e procedure interne.",
  },
  {
    title: "Caricamento sulla nostra piattaforma LMS che permette di automatizzare l'erogazione e il monitoraggio attività formativa",
    description: "Gestisci facilmente la formazione con la nostra piattaforma che automatizza consegna e tracciamento.",
  },
  {
    title: "Erogazione in e-learning ai lavoratori, anche da cellulare e tablet",
    description: "I tuoi dipendenti possono accedere ai corsi da qualsiasi dispositivo, in qualsiasi momento.",
  },
  {
    title: "Test finale",
    description: "Verifica l'apprendimento con un test conclusivo che certifica le competenze acquisite.",
  },
  {
    title: "Rilascio attestato al termine del corso",
    description: "Al superamento del test, rilasciamo un attestato ufficiale valido per la normativa vigente.",
  },
];