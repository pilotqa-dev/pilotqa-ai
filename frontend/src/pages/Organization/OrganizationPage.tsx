import { useEffect, useState } from "react";
import {
  getOrganizations,
  createOrganization,
} from "../../services/organizationService";

const OrganizationPage = () => {
  const [organizations, setOrganizations] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadOrganizations();
  }, []);

  const loadOrganizations = async () => {
    try {
      const data = await getOrganizations();
      setOrganizations(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    if (!name || !code) {
      alert("Please enter Name and Code");
      return;
    }

    await createOrganization({
      name,
      code,
      description,
    });

    setName("");
    setCode("");
    setDescription("");

    loadOrganizations();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>PilotQA AI</h1>
      <h2>Organizations</h2>

      <hr />

      <input
        placeholder="Organization Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Organization Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSave}>Save Organization</button>

      <hr />

      {organizations.length === 0 ? (
        <p>No organizations found.</p>
      ) : (
        <table
          border={1}
          cellPadding={10}
          cellSpacing={0}
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {organizations.map((org) => (
              <tr key={org.id}>
                <td>{org.name}</td>
                <td>{org.code}</td>
                <td>{org.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrganizationPage;