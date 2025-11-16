import SetUpRole from '../../../../../components/common/SetUpRole';

const Role = () => {
  const handleRoleSelect = (role) => {
    console.log('User Role selected:', role);
  };

  return (
    <div className="">
      <SetUpRole onSelectRole={handleRoleSelect} />
    </div>
  );
};

export default Role;
