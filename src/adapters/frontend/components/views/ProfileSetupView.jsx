import React, { useState } from 'react';
import { User, GraduationCap } from 'lucide-react';
import { AVAILABLE_COURSES } from '@ports/user/contracts.ts';
import '@adapters/frontend/styles/components/ProfileSetupView.css';

const ProfileSetupView = ({ initialProfile = null, onSave, error: externalError }) => {
  const [name, setName] = useState(initialProfile?.name ?? '');
  const [course, setCourse] = useState(initialProfile?.course ?? AVAILABLE_COURSES[0]);
  const [year, setYear] = useState(initialProfile?.year ?? 1);
  const [localError, setLocalError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError(null);
    try {
      onSave({ name, course, year: Number(year) });
    } catch (err) {
      setLocalError(err.message);
    }
  };

  const displayError = localError || externalError;

  return (
    <div className="ape-profile-setup">
      <div className="ape-profile-card">
        <div className="ape-profile-header">
          <User size={32} />
          <h1>{initialProfile ? 'Editar perfil' : 'Bem-vindo ao AprendiFluxo'}</h1>
          <p>Configura o teu perfil para personalizar a experiência.</p>
        </div>

        <form onSubmit={handleSubmit} className="ape-profile-form">
          <label className="ape-profile-field">
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="O teu nome"
              required
            />
          </label>

          <label className="ape-profile-field">
            <span>
              <GraduationCap size={16} /> Curso
            </span>
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              {AVAILABLE_COURSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="ape-profile-field">
            <span>Ano lectivo</span>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              {[1, 2, 3, 4, 5].map((y) => (
                <option key={y} value={y}>
                  {y}.º ano
                </option>
              ))}
            </select>
          </label>

          {displayError && <p className="ape-profile-error">{displayError}</p>}

          <button type="submit" className="ape-btn ape-btn-primary ape-profile-submit">
            {initialProfile ? 'Guardar alterações' : 'Começar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetupView;
