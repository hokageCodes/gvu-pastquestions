// pages/past-questions.js
"use client"
// pages/past-questions.js
"use client"
import React, { useState, useEffect } from 'react';

// Dummy data array of past questions
const dummyPastQuestions = [
  { id: 1, faculty: 'Sciences', level: '100 Level', title: 'Science 100 Level Past Question 1', link: '#' },
  { id: 2, faculty: 'Sciences', level: '200 Level', title: 'Science 200 Level Past Question 1', link: '#' },
  { id: 3, faculty: 'Sciences', level: '300 Level', title: 'Science 300 Level Past Question 1', link: '#' },
  { id: 4, faculty: 'Arts', level: '100 Level', title: 'Arts 100 Level Past Question 1', link: '#' },
  { id: 5, faculty: 'Arts', level: '200 Level', title: 'Arts 200 Level Past Question 1', link: '#' },
  { id: 6, faculty: 'Arts', level: '300 Level', title: 'Arts 300 Level Past Question 1', link: '#' },
  { id: 7, faculty: 'Humanities', level: '100 Level', title: 'Humanities 100 Level Past Question 1', link: '#' },
  { id: 8, faculty: 'Humanities', level: '200 Level', title: 'Humanities 200 Level Past Question 1', link: '#' },
  { id: 9, faculty: 'Humanities', level: '300 Level', title: 'Humanities 300 Level Past Question 1', link: '#' },
  { id: 10, faculty: 'Law', level: '100 Level', title: 'Law 100 Level Past Question 1', link: '#' },
  { id: 11, faculty: 'Law', level: '200 Level', title: 'Law 200 Level Past Question 1', link: '#' },
  { id: 12, faculty: 'Law', level: '300 Level', title: 'Law 300 Level Past Question 1', link: '#' },
];

const PastQuestionsPage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [pastQuestions, setPastQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const faculties = ['Sciences', 'Arts', 'Humanities', 'Law'];
  const levels = ['100 Level', '200 Level', '300 Level', '400 Level', '500 Level'];

  useEffect(() => {
    // Fetch past questions based on selected faculty, level, and search query
    const fetchQuestions = async () => {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        let filteredQuestions = dummyPastQuestions;

        if (selectedFaculty) {
          filteredQuestions = filteredQuestions.filter(question => question.faculty === selectedFaculty);
        }

        if (selectedLevel) {
          filteredQuestions = filteredQuestions.filter(question => question.level === selectedLevel);
        }

        if (searchQuery) {
          filteredQuestions = filteredQuestions.filter(question =>
            question.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setPastQuestions(filteredQuestions);
        setLoading(false);
      }, 1000); // Simulate 1 second delay
    };

    fetchQuestions();
  }, [selectedFaculty, selectedLevel, searchQuery]);

  const handleFacultySelect = (faculty) => {
    setSelectedFaculty(faculty);
    setSelectedLevel(null); // Reset selected level when faculty is changed
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Past Questions</h1>
      
      {/* Faculty selection */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Select Faculty</h2>
        <div className="grid grid-cols-2 gap-4">
          {faculties.map((faculty, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-lg border ${selectedFaculty === faculty ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleFacultySelect(faculty)}
            >
              {faculty}
            </button>
          ))}
        </div>
      </div>

      {/* Level selection */}
      {selectedFaculty && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Select Level</h2>
          <div className="grid grid-cols-3 gap-4">
            {levels.map((level, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-lg border ${selectedLevel === level ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleLevelSelect(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search input */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Search</h2>
        <input
          type="text"
          placeholder="Search past questions..."
          className="w-full px-4 py-2 rounded-lg border"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Display past questions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Past Questions</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pastQuestions.length > 0 ? (
            <ul className="divide-y divide-gray-300">
              {pastQuestions.map((question, index) => (
                <li key={index} className="py-2">
                  <a href={question.link} className="text-blue-500 hover:underline">{question.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No past questions found.</p>
          )
        )}
      </div>
    </div>
  );
};

export default PastQuestionsPage;
