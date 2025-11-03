import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SetUpRole = ({ onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState('standard');
  const navigate = useNavigate();

  const handleSubmitRole = (e) => {
    e.preventDefault();

    console.log({ role: selectedRole });

    // Call the parent callback if provided
    if (onSelectRole) {
      onSelectRole(selectedRole);
    }

    navigate(''); // you can set navigation dynamically or leave it blank
  };

  return (
    <div className="flex h-auto flex-col bg-white md:h-screen">
      <form
        onSubmit={handleSubmitRole}
        className="mx-auto w-full max-w-5xl flex-1 px-6 py-8"
      >
        {/* Header with Steps and Close */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">Steps 1/3</p>
          <button type="button" className="rounded-full p-2 hover:bg-gray-100">
            <IoClose className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-gray-900">Ruolo</h1>
        <h2 className="mb-6 text-base font-semibold text-gray-900">
          Tu sei un:
        </h2>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Card 1 - Utente standard */}
          <button
            type="button"
            onClick={() => setSelectedRole('standard')}
            className={`relative h-64 rounded-2xl border-2 p-6 transition-all ${
              selectedRole === 'standard'
                ? 'border-emerald-400 bg-white shadow-lg'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300'
            }`}
          >
            <div className="absolute top-3 right-3">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  selectedRole === 'standard' ? 'bg-emerald-400' : 'bg-gray-200'
                }`}
              >
                {selectedRole === 'standard' && (
                  <FaCheckCircle
                    className="h-4 w-4 text-white"
                    strokeWidth={3}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 flex items-end justify-center gap-2">
                <div className="flex flex-col items-center">
                  <div className="mb-1 h-11 w-11 rounded-full bg-orange-300"></div>
                  <div className="h-16 w-14 rounded-t-full bg-gray-500"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-1 h-11 w-11 rounded-full bg-orange-300"></div>
                  <div className="h-16 w-14 rounded-t-full bg-blue-400"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">
                  Utente standard - Liv. 1
                </span>
              </div>
            </div>
          </button>

          {/* Card 2 - Azienda */}
          <button
            type="button"
            onClick={() => setSelectedRole('business')}
            className={`relative h-64 rounded-2xl border-2 p-6 transition-all ${
              selectedRole === 'business'
                ? 'border-emerald-400 bg-white shadow-lg'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300'
            }`}
          >
            <div className="absolute top-3 right-3">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  selectedRole === 'business' ? 'bg-emerald-400' : 'bg-gray-200'
                }`}
              >
                {selectedRole === 'business' && (
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 flex items-end justify-center gap-2">
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

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">
                  Azienda - Liv. 2
                </span>
              </div>
            </div>
          </button>

          {/* Card 3 - Utente licenza */}
          <button
            type="button"
            onClick={() => setSelectedRole('licensed')}
            className={`relative h-64 rounded-2xl border-2 p-6 transition-all ${
              selectedRole === 'licensed'
                ? 'border-emerald-400 bg-white shadow-lg'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300'
            }`}
          >
            <div className="absolute top-3 right-3">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  selectedRole === 'licensed' ? 'bg-emerald-400' : 'bg-gray-200'
                }`}
              >
                {selectedRole === 'licensed' && (
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-10">
                <img src="/image/icon/level1.jpg" alt="" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">
                  Utente licenza - Liv. 3
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-5xl justify-end py-8">
          <button
            type="submit"
            className="w-[140px] rounded-full border-2 border-[#73BFA1] bg-[#73BFA1] px-6 py-3 font-medium text-[#ffffff] transition-colors hover:bg-[#ffffff] hover:text-[#73BFA1]"
          >
            Procedi
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetUpRole;
