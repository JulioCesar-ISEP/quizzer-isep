import React from 'react';
import { MessageSquare } from 'lucide-react';

const CommentSection = ({ 
  comment, 
  onSaveComment, 
  hasComment 
}) => {
  return (
    <div className="comments-section">
      <label className="comments-label">
        <MessageSquare size={18} />
        <span>Dúvida ou comentário (opcional)</span>
        {hasComment && <span className="comment-saved">✓ Salvo</span>}
      </label>
      <textarea
        value={comment}
        onChange={(e) => onSaveComment(e.target.value)}
        placeholder="Explica a tua dúvida ou pensamento sobre esta questão..."
        className="comment-textarea"
        rows="3"
      />
    </div>
  );
};

export default CommentSection;