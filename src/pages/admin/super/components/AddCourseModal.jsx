import React, { useState } from 'react';
import { X, ChevronDown, Upload, FileText, Plus } from 'lucide-react';
import QuizBuilderModal from './QuizBuilderModal';

export default function AddCourseModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    titolo: '',
    descrizione: '',
    idCorso: '',
    idAzione: '',
    tipologia: 'AUTONOMO',
    settore: 'Sicurezza',
    sezioneCollassabile: 'Sì (aperta)',
    contentFormats: 'Select',
    caricamentoMateriale: [],
    documenti: [],
    prezzo: '',
  });

  const [uploadedMaterials, setUploadedMaterials] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [showQuizBuilder, setShowQuizBuilder] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (type, files) => {
    if (type === 'materials') {
      setUploadedMaterials((prev) => [...prev, ...Array.from(files)]);
    } else if (type === 'documents') {
      setUploadedDocuments((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      ...formData,
      materials: uploadedMaterials,
      documents: uploadedDocuments,
    };
    onSave(courseData);
    // Reset form
    setFormData({
      titolo: '',
      descrizione: '',
      idCorso: '',
      idAzione: '',
      tipologia: 'AUTONOMO',
      settore: 'Sicurezza',
      sezioneCollassabile: 'Sì (aperta)',
      contentFormats: 'Select',
      caricamentoMateriale: [],
      documenti: [],
      prezzo: '',
    });
    setUploadedMaterials([]);
    setUploadedDocuments([]);
  };

  const handleOpenQuizBuilder = () => {
    setShowQuizBuilder(true);
  };

  const handleQuizSave = (quizData) => {
    console.log('Quiz saved:', quizData);
    setShowQuizBuilder(false);
  };

  const handleQuizClose = () => {
    setShowQuizBuilder(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
        <div className="mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-2xl">
          {/* Header */}
          <div className="border-b border-gray-200 bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
                <h1 className="text-xl font-bold text-gray-900">
                  Aggiungi nuovi corsi
                </h1>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            {/* Titolo del Corso */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Titolo del Corso <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.titolo}
                onChange={(e) => handleInputChange('titolo', e.target.value)}
                placeholder="Titolo"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                required
              />
            </div>

            {/* Descrizione */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Descrizione <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.descrizione}
                onChange={(e) =>
                  handleInputChange('descrizione', e.target.value)
                }
                placeholder="Aggiungi una breve descrizione del corso oppure richiama il legislativo"
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                required
              />
            </div>

            {/* ID Corso */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                ID Corso <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.idCorso}
                onChange={(e) => handleInputChange('idCorso', e.target.value)}
                placeholder="Genera automaticamente anto"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                required
              />
            </div>

            {/* ID Azione */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                ID Azione <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.idAzione}
                onChange={(e) => handleInputChange('idAzione', e.target.value)}
                placeholder="Genera automaticamente anto"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                required
              />
            </div>

            {/* Tipologia */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Tipologia <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.tipologia}
                  onChange={(e) =>
                    handleInputChange('tipologia', e.target.value)
                  }
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                >
                  <option value="AUTONOMO">AUTONOMO</option>
                  <option value="GUIDATO">GUIDATO</option>
                  <option value="MISTO">MISTO</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Settore */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Settore <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.settore}
                  onChange={(e) => handleInputChange('settore', e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                >
                  <option value="Sicurezza">Sicurezza</option>
                  <option value="Ambiente">Ambiente</option>
                  <option value="Qualità">Qualità</option>
                  <option value="Privacy">Privacy</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Sezione Collassabile */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Sezione Collassabile <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.sezioneCollassabile}
                  onChange={(e) =>
                    handleInputChange('sezioneCollassabile', e.target.value)
                  }
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                >
                  <option value="Sì (aperta)">Sì (aperta)</option>
                  <option value="Sì (chiusa)">Sì (chiusa)</option>
                  <option value="No">No</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Content Formats */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Content formats <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.contentFormats}
                  onChange={(e) =>
                    handleInputChange('contentFormats', e.target.value)
                  }
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                >
                  <option value="Select">Select</option>
                  <option value="Video">Video</option>
                  <option value="PDF">PDF</option>
                  <option value="Interattivo">Interattivo</option>
                  <option value="Quiz">Quiz</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Caricamento materiale */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Caricamento materiale <span className="text-red-500">*</span>
              </label>
              <div className="mb-4 grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="group flex aspect-video cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 transition-colors duration-200 hover:border-emerald-400"
                  >
                    <div className="text-center">
                      <Upload className="mx-auto mb-2 h-8 w-8 text-gray-400 group-hover:text-emerald-500" />
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={(e) =>
                          handleFileUpload('materials', e.target.files)
                        }
                        className="hidden"
                        id={`material-upload-${index}`}
                      />
                      <label
                        htmlFor={`material-upload-${index}`}
                        className="cursor-pointer text-xs text-gray-500 group-hover:text-emerald-600"
                      >
                        Upload
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleOpenQuizBuilder}
                className="flex items-center space-x-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 transition-colors duration-200 hover:bg-emerald-100"
              >
                <Plus className="h-4 w-4" />
                <span>Add Quiz</span>
              </button>
            </div>

            {/* Aggiungi documenti al tuo corso */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Aggiungi documenti al tuo corso{' '}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-5 gap-4">
                {['PDF', 'DOC', 'PDF', 'DOC', 'CLIP'].map((type, index) => (
                  <div
                    key={index}
                    className="group relative flex aspect-square cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 transition-colors duration-200 hover:border-emerald-400"
                  >
                    <input
                      type="file"
                      accept={
                        type === 'PDF'
                          ? '.pdf'
                          : type === 'DOC'
                            ? '.doc,.docx'
                            : '*/*'
                      }
                      onChange={(e) =>
                        handleFileUpload('documents', e.target.files)
                      }
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <div className="text-center">
                      <FileText className="mx-auto mb-1 h-6 w-6 text-gray-400 group-hover:text-emerald-500" />
                      <span className="text-xs text-gray-500 group-hover:text-emerald-600">
                        {type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prezzo di vendita */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Prezzo di vendita (compresi di IVA se dovuta){' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.prezzo}
                onChange={(e) => handleInputChange('prezzo', e.target.value)}
                placeholder="€ 0,00"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end border-t border-gray-200 pt-6">
              <button
                type="submit"
                className="rounded-lg bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-emerald-600 hover:shadow-xl focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none"
              >
                Salva
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Quiz Builder Modal */}
      <QuizBuilderModal
        isOpen={showQuizBuilder}
        onClose={handleQuizClose}
        onSave={handleQuizSave}
      />
    </>
  );
}
