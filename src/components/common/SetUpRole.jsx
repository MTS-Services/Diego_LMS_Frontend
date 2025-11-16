import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

// Reusable RoleCard component
const RoleCard = ({ role, label, isSelected, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-64 rounded-2xl border-2 p-6 transition-all ${
        isSelected
          ? 'border-emerald-400 bg-white shadow-lg'
          : 'border-gray-200 bg-gray-50 hover:border-gray-300'
      }`}
      aria-pressed={isSelected}
    >
      <div className="absolute top-3 right-3">
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            isSelected ? 'bg-emerald-400' : 'bg-gray-200'
          }`}
        >
          {isSelected && <FaCheckCircle className="h-4 w-4 text-white" />}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-4">{children}</div>
        <span className="text-sm font-semibold text-gray-900">{label}</span>
      </div>
    </button>
  );
};

const SetUpRole = ({ onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState('standard');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSelectRole) onSelectRole(selectedRole);
    navigate(''); // Adjust route as needed
  };

  return (
    <div className="flex h-auto flex-col bg-white md:h-screen">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-5xl flex-1 px-6 py-8"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">Passo 1/3</p>
          <button
            type="button"
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Chiudi"
          >
            <IoClose className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Title */}
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Ruolo</h1>
        <h2 className="mb-6 text-base font-semibold text-gray-900">
          Tu sei un:
        </h2>

        {/* Role Options */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Standard User */}
          <RoleCard
            role="standard"
            label="Utente standard - Liv. 1"
            isSelected={selectedRole === 'standard'}
            onClick={() => setSelectedRole('standard')}
          >
            <div className="flex items-end justify-center gap-2">
              <div className="flex flex-col items-center">
                <div className="mb-1 h-11 w-11 rounded-full bg-orange-300"></div>
                <div className="h-16 w-14 rounded-t-full bg-gray-500"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-1 h-11 w-11 rounded-full bg-orange-300"></div>
                <div className="h-16 w-14 rounded-t-full bg-blue-400"></div>
              </div>
            </div>
          </RoleCard>

          {/* Business */}
          <RoleCard
            role="business"
            label="Azienda - Liv. 2"
            isSelected={selectedRole === 'business'}
            onClick={() => setSelectedRole('business')}
          >
            <div className="flex items-end justify-center gap-2">
              <div className="flex flex-col items-center">
                <div className="relative mb-1 h-11 w-11 rounded-full bg-orange-300">
                  <div className="absolute top-5 left-1/2 flex -translate-x-1/2 gap-1">
                    <div className="h-3 w-3 rounded-full border-2 border-gray-800 bg-transparent"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-gray-800 bg-transparent"></div>
                  </div>
                </div>
                <div className="relative h-16 w-14 rounded-t-full bg-blue-300">
                  <div className="absolute top-0 left-1/2 h-10 w-2 -translate-x-1/2 bg-gray-800"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-1 h-11 w-11 rounded-full bg-orange-300"></div>
                <div className="h-16 w-14 rounded-t-full bg-blue-200"></div>
              </div>
            </div>
          </RoleCard>

          {/* Licensed User */}
          <RoleCard
            role="licensed"
            label="Utente licenza - Liv. 3"
            isSelected={selectedRole === 'licensed'}
            onClick={() => setSelectedRole('licensed')}
          >
            <img
              src="/image/icon/level1.jpg"
              alt="Icona utente con licenza"
              className="h-24 w-24 object-contain"
            />
          </RoleCard>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="w-[140px] rounded-full border-2 border-[#73BFA1] bg-[#73BFA1] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#73BFA1]"
          >
            Procedi
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetUpRole;
