const Step3 = ({ formData, onBack, onSubmit }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Review Your Info</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>

      <div className="flex gap-2 mt-4">
        <button onClick={onBack}>Back</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Step3;
