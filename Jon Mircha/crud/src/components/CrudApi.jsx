import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { CrudProvider } from "../context/CrudContext";

const CrudApi = () => {
  return (
    <CrudProvider>
      <div>
        <h2>Crud Api con Context API</h2>
        <CrudForm />
        <CrudTable />
      </div>
    </CrudProvider>
  );
};

export default CrudApi;
