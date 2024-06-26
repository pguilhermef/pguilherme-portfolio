// components/ExperienceCard.js

import { format } from 'date-fns';

export function ExperienceCard({ title, company, employmentType, description, skills, startDate, endDate }) {

  return (
    <div className="bg-neutral-900 text-gray-100 rounded-lg border border-gray-700 p-6 shadow-lg max-w-4xl mx-auto mt-8 mb-2">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-lg">{`${company}, ${employmentType}`}</p>
        </div>
        <div className="text-right">
          <p className="text-lg">{startDate} - {endDate}</p>
        </div>
      </div>
      <pre className="bg-neutral-800 p-6 rounded-lg text-base whitespace-pre-wrap">
        {description}
      </pre>
      <div className="mt-4">
        <strong className="text-lg">Skills:</strong> <span className="text-base">{skills.join(', ')}</span>
      </div>
    </div>
  );
}
