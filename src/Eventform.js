import React, { useState } from "react";

function Eventform({
  venue,
  setVenue,
  setApplications,
  setParticipants,
  setCost,
  bring,
  setBring,
}) {
  const venues = [
    {
      jp: "みちのく潮風トレイル 名取トレイルセンター",
      en: "Michinoku Coastal Trail Natoric Trail Center",
    },
    {
      jp: "種差海岸インフォメーションセンター",
      en: "Tanesashi Coast Information Center",
    },
    { jp: "北山崎ビジターセンター", en: "Kitayamazaki Visitor Center" },
    { jp: "浄土ヶ浜ビジターセンター", en: "Jodogahama Visitor Center" },
    {
      jp: "碁石海岸インフォメーションセンター",
      en: "Goishi Coast Information Center",
    },
    {
      jp: "南三陸 海のビジターセンター",
      en: "Minamisanriku Marine Visitor Center",
    },
    { jp: "唐桑半島ビジターセンター", en: "Karakuwa Peninsula Visitor Center" },
    {
      jp: "石巻・川のビジターセンター",
      en: "Ishinomaki Riverside Vistor Center",
    },
    { jp: "牡鹿半島ビジターセンター", en: "Oshika Peninsula Visitor Center" },
    { jp: "千客万来館（相馬市観光協会", en: "Senkyaku Banraikan" },
    { jp: " ", en: " " },
  ];

  const thingstobring = [
    { jp: "昼食", en: "lunch" },
    { jp: "飲み物", en: "a drink" },
    { jp: "リュック", en: "a bag or backpack" },
    { jp: "雨具", en: "rainwear" },
    { jp: "タオル", en: "a towel" },
    { jp: "マスク", en: "a mask" },
    { jp: "帽子", en: "a hat" },
    { jp: "手袋", en: "gloves" },
    {
      jp: "動きやすい服装と歩きやすい靴",
      en: "shoes and clothes suitable for walking",
    },
    { jp: "寒くない格好", en: "warm clothes" },
    { jp: "参加費", en: "your participation fee" },
    { jp: "保険証", en: "your health insurance card" },
  ];

  const handleVenueChange = (event) => {
    setVenue(event.target.value);
  };

  const handleApplicationChange = (event) => {
    setApplications(event.target.value);
  };

  const handleParticipantsChange = (event) => {
    // setParticipants(event.target.value);
    setParticipants(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleThingChange = (event) => {
    let newThings = bring.concat(event.target.value);
    setBring(newThings);
  };

  const clearThings = () => {
    setBring([]);
    const checkBoxes = document.querySelectorAll("input[type='checkbox']");
    console.log("checkboxes", checkBoxes);
    checkBoxes.forEach((checkbox) => (checkbox.checked = false));
  };

  return (
    <div className="form">
      <form>
        会場{" "}
        <select value={venue.en} onChange={handleVenueChange}>
          {venues.map((item) => (
            <option value={item.en} key={item.en}>
              {item.jp}
            </option>
          ))}
        </select>
        <br />
        定員
        <input type="number" onChange={handleParticipantsChange} /> <br />
        参加費
        <input type="text" onChange={handleCostChange} /> <br />
        持ち物{" "}
        <button type="button" onClick={clearThings}>
          clear
        </button>
        {thingstobring.map((thing) => (
          <span>
            {thing.jp}
            <input
              type="checkbox"
              value={thing.en}
              onChange={handleThingChange}
            />
          </span>
        ))}
        <br />
        お問い合わせ、申し込み　
        <select value={venue.en} onChange={handleApplicationChange}>
          {venues.map((item) => (
            <option value={item.en} key={item.en}>
              {item.jp}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Eventform;
