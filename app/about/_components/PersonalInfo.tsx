"use client"

import React from "react";
import userProps from "@/config/user";

type Props = {}

export default function PersonalInfo({ }: Props) {
  const SkillsItems = userProps.stack.join(', ');

  let Technical = (<p>(Technical)</p>)
  let Native = (<p>(Native)</p>)

  const Languages = userProps.languages.map((props, index) =>
    <div key={index} className="flex flex-row gap-1 items-baseline">
      <p>{props}</p>
      <span className="text-xs text-zinc-500">{props.slice(0) === 'Inglês' ? Technical : Native}</span>
      {index !== userProps.languages.length - 1 && <span>·</span>}
    </div>
  )


  return (
    <div className="flex flex-col items-start justify-center w-full">
      <ul className="flex flex-col gap-2 list-disc text-gray-400 pl-6">
        <li className="flex gap-2">
          <span className="font-semibold text-white">Name:</span>
          <p>{userProps.name}</p>
        </li>
        <li className="flex gap-2">
          <span className="font-semibold text-white">Age:</span>
          <p>{userProps.age}</p>
        </li>
        <li className="flex gap-2">
          <span className="font-semibold text-white">Profession:</span>
          <p>{userProps.profession}</p>
        </li>
        <li className="flex gap-2">
          <span className="font-semibold text-white">Stacks:</span>
          <p>{SkillsItems}.</p>
        </li>
        <li className="flex gap-2">
          <span className="font-semibold text-white">Language:</span>
          <p className="flex gap-1 flex-wrap text-balance">{Languages}</p>
        </li>
      </ul>
    </div>
  )
}
