import RoleList from "./RoleList";

const ProductionTeamList = ({ creatorList, directorList, castList }) => {
  return (
    <section className="flex flex-col lg:gap-6 gap-6 lg:w-1/6 justify-center h-full my-auto">
      {creatorList?.length > 0 && (
        <RoleList roleTitle="Creator" peopleList={creatorList} />
      )}
      {directorList?.length > 0 && (
        <RoleList roleTitle="Director" peopleList={directorList} />
      )}
      {castList?.length > 0 && (
        <RoleList roleTitle="Cast" peopleList={castList} />
      )}
    </section>
  );
};

export default ProductionTeamList;
