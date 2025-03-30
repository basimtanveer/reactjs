/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import "../index.css";

const CallDetailsForm = () => {

  const years = Array.from({ length: 2025 - 1999 + 1 }, (_, i) => 1999 + i);
  const makes = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Mitsubishi", "Volvo", "Volkswagen", "Audi", "Mazda", "Chevrolet", "Cadillac", "Nissan", "Kia", "Subaru", "Lexus", "Land Rover", "Peugeot", "Skoda", "Fiat", "Citroën", "Acura", "Buick", "Chrysler", "Dodge", "Genesis", "GMC", "Hummer", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Lincoln", "Mercury", "Mini", "Pontiac", "Ram", "Saturn", "Smart"];
  const modelsByMake = {
  Toyota: ["Corolla", "Camry", "RAV4", "Prius", "Sienna", "GR86", "Fortuner", "Revo"],
  Honda: ["Civic", "Accord", "CR-V", "Amaze", "HR-V", "Insight", "Vezel", "Airwave", "Acty"],
  Ford: ["Focus", "Mustang", "Explorer", "Mach-e", "Aerostar", "Fiesta", "Aspire", "Focus", "Model T", "Super Duty"],
  BMW: ["X1", "X3", "X4", "X5", "M2", "M3", "M4", "M5", "M8", "I3", "I4", "I5", "I8"],
  Mercedes: ["C-Class", "E-Class", "S-Class", "Gle", "Glb", "Eqb", "Eqa", "B-class", "Coupe"],
  Mitsubishi: ["Mirage", "Xpander", "L200", "Galant", "Lancer", "Triton", "Outlander", "PHEV", "Attrage", "L300"],
  Volvo: ["xc40", "s60", "s90", "xc90", "Ex30", "Ex90", "V60", "P1800", "V60", "C30"],
  Volkswagen: ["Golf R", "Eos", "Ameo", "Taos", "Virtus", "T-cross", "Taigun", "Beetle", "Tiguan", "Jetta"],
  Audi: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q5", "Q7", "R8"],
  Mazda: ["CX3", "CX5", "CX-8", "CX-30", "CX-50", "CX-60", "CX-90", "Mazda2", "CX7", "CX-80"],
  Chevrolet: ["Cruze", "Camaro", "Tahoe", "Colorado", "Trax", "Volt", "Traverse", "Malibu", "Impala", "Silverado"],
  Cadillac: ["CT4", "CT5-V", "CT6", "XT4", "XT6", "CTS", "STS", "BLS", "ELR", "DTS"],
  Nissan: ["Altima", "Maxima", "Sentra", "Pathfinder", "Rogue", "Murano", "GT-R", "370Z", "Juke"],
  Kia: ["Sportage", "Seltos", "Sonet", "Carnival", "Sorento", "Stinger", "Telluride", "K5"],
  Subaru: ["Impreza", "Legacy", "Outback", "Forester", "Crosstrek", "BRZ", "Ascent", "WRX"],
  Lexus: ["IS", "ES", "GS", "LS", "RX", "NX", "UX", "GX", "LX"],
  LandRover: ["Defender", "Discovery", "Evoque", "Velar", "Range Rover"],
  Peugeot: ["208", "308", "508", "2008", "3008", "5008"],
  Skoda: ["Octavia", "Superb", "Kodiaq", "Kamiq", "Karoq"],
  Fiat: ["500", "Panda", "Tipo", "Doblo", "Punto"],
  Citroën: ["C3", "C4", "C5", "Berlingo", "Ami"],
  Acura: ["MDX", "RDX", "TLX", "Integra", "TLX S", "MDX Type S", "Integra Type S", "RL", "CSX", "TL", "TSX", "RLX", "TSX Wagon", "ILX", "NSX", "ZDX"],
  Buick: ["Avenir", "Enclave", "LaCrosse", "Regal", "Verano", "Encore", "Envision", "Cascada", "Encore GX", "Envision Plus", "Envista"],
  Chrysler: ["Aspen", "Sebring", "300", "PT Cruiser", "Pacifica", "Crossfire", "200", "Voyager"],
  Dodge: ["Caliber", "Charger", "Magnum", "Viper", "Avenger", "Challenger", "Journey", "Dart", "Neon", "Hornet"],
  Genesis: ["G70", "G80", "G90", "GV70", "GV80"],
  GMC: ["Acadia", "Terrain", "Yukon", "Yukon XL", "Canyon", "Sierra", "Savana"],
  Hummer: ["H2", "H3"],
  Infiniti: ["G35", "G37", "G25", "M35", "M45", "M37", "M56", "Q50", "Q60", "Q70", "EX35", "EX37", "FX35", "FX37", "FX50", "QX50", "QX55", "QX60", "QX70", "QX80"],
  Isuzu: ["Ascender", "i-Series", "D-Max", "MU-7", "MU-X", "Panther"],
  Jaguar: ["X-Type", "S-Type", "XF", "XJ", "XE", "F-Pace", "E-Pace"],
  Jeep: ["Wrangler", "Wrangler Unlimited", "Grand Cherokee", "Cherokee", "Compass", "Patriot", "Renegade", "Liberty", "Commander", "Gladiator", "Wagoneer", "Grand Wagoneer"],
  Lincoln: ["MKZ", "MKX", "MKS", "MKT", "MKC", "Nautilus", "Corsair", "Aviator", "Navigator", "Town Car", "Mark LT"],
  Mercury: ["Montego", "Milan", "Mariner", "Mountaineer", "Grand Marquis"],
  Mini: ["Hatch (Hardtop)", "Convertible", "Clubman", "Countryman", "Paceman", "Aceman"],
  Pontiac: ["G3", "G5", "G6", "Torrent", "Montana SV6", "Vibe"],
  Ram: ["1500", "2500", "3500", "4500", "5500", "ProMaster", "ProMaster City", "700", "1000", "Rampage"],
  Saturn: ["Aura", "Outlook", "Relay", "Vue"],
  Smart: ["Fortwo", "Fortwo Cabrio", "Forfour"]
  };

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [customerInfo, setCustomerInfo] = useState([]);
  const [transcript, setTranscript] = useState("");
  const [remarks, setRemarks] = useState("");
  // const [status, setStatus] = useState([]);


  // useEffect(() => {
  //   fetch("https://api.example.com/status")
  //     .then(response => response.json())
  //     .then(data => setStatus(data))
  //     .catch(error => console.error("Error fetching status:", error));
  // }, []);

  const handleCustomerInfoChange = (option) => {
    setCustomerInfo((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-[98%] h-full p-6">
        <h3 className="text-xl font-semibold mb-2">Call Detail</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="Incoming Phone No" className="input-field border-black-100" />
          <input type="text" placeholder="Call Duration (min)" className="input-field border-gray-100" />
          <input type="date" placeholder='Date' className="input-field border-gray-300" />
          <input type="time" placeholder='Time' className="input-field border-gray-300" />
          <input type="text" placeholder="Call Recording Link" className="input-field border-gray-300" />
          <input type="text" placeholder="Agent ID" className="input-field border-gray-300" />
        </div>
        {/* Current Vehicle */}
        <h3 className="text-xl font-semibold mb-4">CURRENT VEHICLE</h3>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <select className="input-field border-gray-300" value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)}>
            <option value="">Select Make</option>
            {makes.map((make) => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
          <select className="input-field border-gray-300" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select className="input-field border-gray-300" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={!selectedMake}>
            <option value="">Select Model</option>
            {selectedMake && modelsByMake[selectedMake] ? modelsByMake[selectedMake].map((model) => (
              <option key={model} value={model}>{model}</option>
            )) : null}
          </select>
        </div>
        {/* Issue Form */}
        <h3 className="text-xl font-semibold mb-4">ISSUE FORM</h3>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <input type="text" placeholder="Client Name" className="input-field border-gray-300" />
          <select className="input-field border-gray-300 "><option>Agent ask vehicle info</option></select>
          <div>
            <label className="block font-semibold">Did agent ask customer info:</label>
            <div className="flex gap-4">
            {['Name', 'Email', 'Phone', 'N/A'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={customerInfo.includes(option)}
                  onChange={() => handleCustomerInfoChange(option)}
                />
                {option}
              </label>
            ))}
          </div>

          </div>
          <div>
            <label className="block font-semibold">Audio Player</label>
            <audio controls className="w-full">
              <source src="audio-file.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className='bg-gray-100 p-6'>
          <label className="block font-semibold">Transcript</label>
          <textarea className="input-field border-gray-300 h-24 w-full focus:outline-none" value={transcript} 
            onChange={(e) => setTranscript(e.target.value)} ></textarea>
          </div>
          <div className='bg-gray-100 p-6'>
          <label className="block font-semibold">Remarks</label>
          <textarea className="input-field border-gray-300 h-24 w-full focus:outline-none" value={transcript} 
            onChange={(e) => setTranscript(e.target.value)} ></textarea>
          </div>
          
        </div>
        {/* Call Ending & Alerts */}
        <div className='grid grid-cols-1'>
          <h3 className="text-xl font-semibold mb-2">CALL ENDING</h3>
          <select className="input-field border-gray-300 mb-2"><option>Select Call Ending Status</option></select>


          {/* <select className="input-field border-gray-300 mb-2">
            <option value="">Select Status</option>
            {status.map(status=>{
              <option key={status.id} value={status.name}>{status.id}</option>
            })}
          </select> */}
        </div>


        <div className='grid grid-cols-1'>
          <h3 className="text-xl font-semibold mb-2">ALERTS</h3>
          <select className="input-field border-gray-300"><option>Select Alert Type</option></select>
        </div>

      </div>
    </div>
  );
};

export default CallDetailsForm;
