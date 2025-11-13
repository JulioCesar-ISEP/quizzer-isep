import React, { useState, useEffect } from 'react';
import { MessageSquare, Save, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import '../../styles/ui/CommentSection.css';

const CommentSection = ({ 
  comment, 
  onSaveComment, 
  hasComment,
  compact = false,
  maxLength = 500
}) => {
  const [localComment, setLocalComment] = useState(comment || '');
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle' | 'saving' | 'saved'
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setLocalComment(comment || '');
    setCharCount(comment?.length || 0);
  }, [comment]);

  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    if (newComment.length <= maxLength) {
      setLocalComment(newComment);
      setCharCount(newComment.length);
    }
  };

  const handleSaveComment = async () => {
    if (localComment !== comment) {
      setIsSaving(true);
      setSaveStatus('saving');
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      onSaveComment(localComment);
      setIsSaving(false);
      setSaveStatus('saved');
      
      // Reset status after 2 seconds
      setTimeout(() => {
        setSaveStatus('idle');
      }, 2000);
    }
  };

  const handleBlur = () => {
    if (localComment !== comment && localComment.trim().length > 0) {
      handleSaveComment();
    }
  };

  const handleKeyDown = (e) => {
    // Save on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSaveComment();
    }
  };

  const getCharCountClass = () => {
    const percentage = (charCount / maxLength) * 100;
    if (percentage >= 90) return 'danger';
    if (percentage >= 75) return 'warning';
    return '';
  };

  const getSaveStatusText = () => {
    switch (saveStatus) {
      case 'saving':
        return 'Salvando...';
      case 'saved':
        return 'Salvo!';
      default:
        return '';
    }
  };

  return (
    <div className={`ape-comments-section ${compact ? 'compact' : ''} ${hasComment ? 'highlight' : ''}`}>
      <label className="ape-comments-label">
        <MessageSquare size={18} />
        <span>
          {compact ? 'Anotação do Lab' : 'Registro do Laboratório'}
        </span>
        {hasComment && (
          <span className="ape-comment-saved">
            <CheckCircle size={14} />
            Anotação Guardada
          </span>
        )}
      </label>
      
      <textarea
        value={localComment}
        onChange={handleCommentChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={
          compact 
            ? "Registra insights ou dúvidas sobre esta solução..."
            : "Documenta o teu raciocínio, dificuldades ou insights durante o desafio..."
        }
        className="ape-comment-textarea"
        rows={compact ? 2 : 3}
        maxLength={maxLength}
      />

      <div className="ape-comment-counter">
        <div className={`ape-char-count ${getCharCountClass()}`}>
          {charCount}/{maxLength}
        </div>
        
        {(saveStatus === 'saving' || saveStatus === 'saved') && (
          <div className={`ape-save-indicator ${saveStatus === 'saving' ? 'ape-saving' : 'ape-saved'}`}>
            {saveStatus === 'saving' ? (
              <>
                <Save size={14} />
                <span>Salvando...</span>
              </>
            ) : (
              <>
                <CheckCircle size={14} />
                <span>Salvo!</span>
              </>
            )}
          </div>
        )}
      </div>

      {!compact && (
        <div className="ape-comment-tips">
          <div className="ape-tips-title">
            <Lightbulb size={14} />
            Dicas para Anotações Úteis
          </div>
          <ul className="ape-tips-list">
            <li className="ape-tip-item">
              Explica o teu raciocínio passo a passo
            </li>
            <li className="ape-tip-item">
              Identifica conceitos que precisas rever
            </li>
            <li className="ape-tip-item">
              Regista padrões ou insights importantes
            </li>
            <li className="ape-tip-item">
              Anota dúvidas específicas para pesquisar depois
            </li>
          </ul>
        </div>
      )}

      {charCount >= maxLength * 0.9 && (
        <div className="ape-char-warning">
          <AlertCircle size={14} />
          <span>Estás a aproximar-te do limite máximo de caracteres.</span>
        </div>
      )}
    </div>
  );
};

export default CommentSection;