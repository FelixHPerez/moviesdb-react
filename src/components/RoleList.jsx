const RoleList = ({ roleTitle, peopleList }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-0 items-baseline">
      <h3 className="text-zinc-300 font-semibold">{roleTitle}</h3>
      <ul className="space-y-2 lg:flex lg:gap-3 lg:items-baseline lg:whitespace-nowrap">
        {peopleList.slice(0, 4).map((person) => (
          <li className="text-xs lg:text-sm text-zinc-400" key={person.id}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;
