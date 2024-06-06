import React, { useState } from 'react';

function ToggleSwitch({ isOn, handleToggle }) {

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={handleToggle}
        />
        <div className="w-11 h-6 bg-white rounded-full transition duration-200">
          <div
            className={`w-6 h-6 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
              !isOn ? 'translate-x-6 bg-red-600' : 'bg-green-800'
            }`}
          />
        </div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
