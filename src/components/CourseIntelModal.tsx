"use client";

import { useState } from "react";
import { Course } from "@/data";
import { ProfIntel } from "@/data/intel";

export function CourseIntelModal({
  course,
  intel,
  onClose,
}: {
  course: Course;
  intel: ProfIntel;
  onClose: () => void;
}) {
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [localReviews, setLocalReviews] = useState(intel.reviews);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    const newReview = {
      author: "You",
      rating: newReviewRating,
      text: newReviewText,
    };
    setLocalReviews([newReview, ...localReviews]);
    setNewReviewText("");
    setNewReviewRating(5);
  };

  const isTBD = course.prof === "TBD";
  const overallRating = localReviews.length
    ? (
        localReviews.reduce((acc, r) => acc + r.rating, 0) / localReviews.length
      ).toFixed(1)
    : intel.rating.toFixed(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl bg-panel border border-glass-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-glass-border relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-faint hover:text-text transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-start gap-4 mb-2">
            <span className="text-[12px] font-mono text-glow bg-glow-soft px-2 py-1 rounded-md">
              {course.code} §{course.section}
            </span>
          </div>
          <h2 className="text-[24px] text-text font-serif leading-tight mb-1">
            {course.name}
          </h2>
          <div className="text-[15px] text-text-soft">
            Professor: <span className="font-medium text-text">{course.prof}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          {!isTBD ? (
            <>
              {/* Intel Summary */}
              <div className="flex gap-6 mb-8 bg-glass p-5 rounded-xl border border-glass-border">
                <div className="flex-shrink-0 text-center border-r border-glass-border pr-6">
                  <div className="text-[32px] font-serif text-glow leading-none mb-1">
                    {overallRating}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-text-faint font-mono">
                    overall
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[12px] uppercase tracking-wider text-text-faint font-mono mb-2">
                    Student Intel
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {intel.traits.map((trait, i) => (
                      <span
                        key={i}
                        className="text-[12px] px-2.5 py-1 rounded-md bg-white/5 text-text-soft border border-white/10"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add Review */}
              <div className="mb-8">
                <h3 className="text-[14px] font-medium text-text mb-3">Add a Review</h3>
                <form onSubmit={handleSubmitReview} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-text-soft">Rating:</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                      className="w-32 accent-glow"
                    />
                    <span className="text-[13px] font-mono text-glow">
                      {newReviewRating}/5
                    </span>
                  </div>
                  <textarea
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    placeholder="What should others know about this class?"
                    className="w-full bg-glass border border-glass-border rounded-lg p-3 text-[14px] text-text placeholder:text-text-faint focus:outline-none focus:border-glow min-h-[80px]"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!newReviewText.trim()}
                      className="px-4 py-2 bg-glow text-bg-soft rounded-lg text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                    >
                      Post Review
                    </button>
                  </div>
                </form>
              </div>

              {/* Reviews List */}
              <div>
                <h3 className="text-[14px] font-medium text-text mb-4">
                  Student Reviews ({localReviews.length})
                </h3>
                <div className="space-y-4">
                  {localReviews.map((review, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-glass-border bg-glass/30"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[13px] font-medium text-text">
                          {review.author}
                        </span>
                        <span className="text-[12px] font-mono text-glow">
                          ★ {review.rating}.0
                        </span>
                      </div>
                      <p className="text-[14px] text-text-soft leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-text-faint">
              Instructor is TBD. No intel available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
