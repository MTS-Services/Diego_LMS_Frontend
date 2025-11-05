import { GrClose } from 'react-icons/gr';

import { Heading, Paragraph, InputField } from '../ui';

const SignUpPassword = ({ onSubmitPassword }) => {
  const handlePassWordSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    if (onSubmitPassword) {
      onSubmitPassword(data);
    }
  };

  return (
    <div className="flex h-auto flex-col bg-white md:h-screen">
      <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        {/* Header with Steps and Close */}
        <div className="mb-6 flex items-center justify-between">
          <Paragraph className="text-sm text-gray-600">Steps 3/3</Paragraph>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <GrClose className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <Heading level={2}>Crea la tua password</Heading>
        <form onSubmit={handlePassWordSubmit} action="">
          <InputField
            TClassName={''}
            className={'w-full'}
            name={'pass'}
            placeholder={'842000@Sa'}
            title={'Nuova password *'}
            type={'text'}
          />

          <Heading level={3}>
            Lunghezza minima: 8 caratteri (consigliati 12 o più)
          </Heading>
          <div className="my-6 flex flex-col gap-3">
            <Heading>Deve includere almeno:</Heading>
            <Paragraph>1 lettera maiuscola (A–Z)</Paragraph>
            <Paragraph>1 lettera minuscola (a–z)</Paragraph>
            <Paragraph>1 numero (0–9)</Paragraph>
            <Paragraph>1 carattere speciale (!, ?, $, %, &)</Paragraph>
          </div>
          <Heading level={3}>
            Non deve contenere nome utente, nome reale o altre informazioni
            facilmente intuibili
          </Heading>
          <InputField
            TClassName={''}
            className={'w-full'}
            name={'confirmPass'}
            placeholder={'842000@Sa'}
            title={'Conferma password *'}
            type={'text'}
          />

          {/* Footer with Procedi button */}
          <div className="mx-auto flex w-full max-w-3xl justify-end px-6 py-8">
            <button
              type="submit"
              className="w-[140px] rounded-full border-2 border-[#73BFA1] bg-[#73BFA1] px-6 py-3 font-medium text-[#ffffff] transition-colors hover:bg-[#ffffff] hover:text-[#73BFA1]"
            >
              Procedi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPassword;
