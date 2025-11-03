// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { Heading, Paragraph, Button, Card } from '../../../components/ui'

// const QuizResult = () => {
//     const { state } = useLocation()
//     const navigate = useNavigate()

//     const score = state?.scorePercentage ?? 0
//     const correct = state?.correct ?? 0
//     const total = state?.total ?? 0
//     const time = state?.time ?? '—'

//     const passed = score >= 70

//     return (
//         <div className="p-6 md:p-10 flex items-center justify-center min-h-[60vh]">
//             <div className="max-w-2xl w-full">
//                 <Card>
//                     <div className="text-center py-10">
//                         <Heading level={3} className="text-[#73BFA1]">Risultati del quiz</Heading>

//                         {passed ? (
//                             <Paragraph className="text-[#68AC91] mt-3">Congratulazioni. Hai superato il test!</Paragraph>
//                         ) : (
//                             <Paragraph className="text-[#E35A5A] mt-3">Il tuo punteggio attuale è inferiore al 70%. Ti invitiamo a ripetere il test per migliorare il risultato e consolidare le competenze acquisite.</Paragraph>
//                         )}

//                         <div className="mt-8 mx-auto max-w-sm">
//                             <div className="bg-[#F6FBF9] border border-[#DFF5E9] rounded-md p-6 text-left">
//                                 <h4 className="text-lg font-semibold mb-4">Punteggi</h4>

//                                 <div className="flex justify-between py-2">
//                                     <span className="text-sm text-gray-600">Punteggio ottenuto</span>
//                                     <span className={`font-semibold ${passed ? '' : 'text-[#E35A5A]'}`}>{score}%</span>
//                                 </div>

//                                 <div className="flex justify-between py-2">
//                                     <span className="text-sm text-gray-600">Totale risposte corrette</span>
//                                     <span className="font-semibold">{correct}/{total}</span>
//                                 </div>

//                                 <div className="flex justify-between py-2">
//                                     <span className="text-sm text-gray-600">Tempo totale impiegato nel test</span>
//                                     <span className="font-semibold">{time}</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-8 flex justify-center gap-4">
//                             {passed ? (
//                                 <>
//                                     <Button label="Torna ai corsi" variant="outline" onClick={() => navigate('/dash/student/quizes')} />
//                                     <Button label="Rivedi il quiz" onClick={() => navigate(-1)} />
//                                 </>
//                             ) : (
//                                 <Button label="Riprova" onClick={() => navigate('/dash/student/quizes')} />
//                             )}
//                         </div>
//                     </div>
//                 </Card>
//             </div>
//         </div>
//     )
// }

// export default QuizResult




import React from 'react';

const scoreData = [
  { label: 'Punteggio ottenuto', value: '90%' },
  { label: 'Totale risposte corrette', value: '9/10' },
  { label: 'Tempo totale impiegato nel test', value: '10 min' },
];

const ScoreItem = ({ label, value }) => (
  <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0">
    <span className="text-gray-600">{label}</span>
    <span className="text-lg font-semibold text-gray-900">{value}</span>
  </div>
);

const QuizResults = () => {
  return (
    
    <div className="flex items-center justify-center min h-screen   p-4">
      
      <div className="w-full max-w-xl text-center p-12 bg-white  rounded-xl shadow-lg">
  
        <h1 className="text-3xl font-semibold text-[#73BFA1]">
          Risultati del quiz
        </h1>
        <p className="mt-2 text-lg text-[#73BFA1]">
          Congratulazioni. Hai superato il test!
        </p>

        <div className="relative mt-8 w-full overflow-hidden rounded-xl bg-[#73BFA1]/4 p-8 text-left ">
          
        
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#73BFA1]/8 opacity-50"></div>

         
          <div className="relative z-10">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Punteggi
            </h2>
           
            <div className="space-y-4">
              {scoreData.map((item) => (
                <ScoreItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;