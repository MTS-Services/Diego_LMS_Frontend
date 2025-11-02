import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Input from '../../../../../components/ui/Input';
import { Heading, Paragraph } from '../../../../../components/ui';

const Information = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (value) => {
    setSelected(selected === value ? '' : value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div className="flex h-auto flex-col bg-white md:h-screen">
      <div className="mx-auto w-full max-w-5xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Paragraph className="text-sm text-gray-600">Steps 2/3</Paragraph>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <GrClose className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <Heading level={4}>Informazioni</Heading>

        <form onSubmit={handleFormSubmit}>
          {/* Name */}
          <Input
            className="w-full"
            name="firstName"
            placeholder="Inserisci il nome"
            title="Name *"
            type="text"
          />

          <Input
            className="w-full"
            name="lastName"
            placeholder="Inserisci il cognome"
            title="Cognome *"
            type="text"
          />

          <Input
            className="w-full"
            name="birthDate"
            title="Data di nascita *"
            type="date"
          />

          <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-5">
            <Input
              className="col-span-1 w-full"
              name="city"
              placeholder="Inserisci il luogo di nascita"
              title="Città *"
              type="text"
            />
            <Input
              className="col-span-1 w-full"
              name="country"
              placeholder="Seleziona il Paese"
              title="Paese *"
              type="text"
            />
          </div>

          <Input
            className=""
            name="address"
            placeholder="Via, numero civico, CAP, città, sigla provincia, paese"
            title="Indirizzo di residenza *"
            type="text"
          />

          <Input
            className=""
            name="companyName"
            placeholder="Inserisci il nome dell azienda"
            title="Nome azienda *"
            type="text"
          />

          <Input
            className=""
            name="office"
            placeholder="Inserisci sede legale (Via, numero civico, CAP, città, sigla provincia, paese)"
            title="Sede legale *"
            type="text"
          />

          <Input
            className=""
            name="vatNumber"
            placeholder="Inserisci la Partita IVA"
            title="Partita IVA *"
            type="number"
          />

          <Input
            className=""
            name="taxCode"
            placeholder="Inserisci il codice fiscale"
            title="Codice fiscale (se diverso da partita IVA) *"
            type="number"
          />

          <Heading level={4}>Cittadinanza</Heading>
          <div className="my-5 flex items-center">
            <div className="flex items-center gap-8">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected === 'estera'}
                  onChange={() => handleChange('estera')}
                  name="citizenship"
                  value="estera"
                  className="h-4 w-4 cursor-pointer rounded border border-gray-400 accent-gray-700"
                />
                <span className="text-sm text-gray-700">Estera</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected === 'italiana'}
                  onChange={() => handleChange('italiana')}
                  name="citizenship"
                  value="italiana"
                  className="h-4 w-4 cursor-pointer rounded border border-gray-400 accent-gray-700"
                />
                <span className="text-sm text-gray-700">Italiana</span>
              </label>
            </div>
          </div>

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

export default Information;
