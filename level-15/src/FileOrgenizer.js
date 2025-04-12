import React, { useState } from 'react';

const FileOrganizer = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      file,
      type: getFileType(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const getFileType = (file) => {
    if (file.type.startsWith('image/')) return 'Images';
    if (file.type === 'application/pdf' || file.type.includes('word')) return 'Documents';
    return 'Others';
  };

  const renderFilesByType = (type) => {
    return files
      .filter((f) => f.type === type)
      .map(({ file }, index) => (
        <div key={index} className="card m-2" style={{ width: '10rem' }}>
          {file.type.startsWith('image/') ? (
            <img
              src={URL.createObjectURL(file)}
              className="card-img-top"
              alt={file.name}
              style={{ height: '100px', objectFit: 'cover' }}
            />
          ) : (
            <div className="card-body">
              <p className="card-text text-truncate">{file.name}</p>
            </div>
          )}
        </div>
      ));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📂 File Organizer</h2>

      <div className="mb-3">
        <label htmlFor="fileUpload" className="form-label">
          Upload Files
        </label>
        <input
          type="file"
          multiple
          className="form-control"
          id="fileUpload"
          onChange={handleFileUpload}
        />
      </div>

      <div>
        <h4>🖼️ Images</h4>
        <div className="d-flex flex-wrap">{renderFilesByType('Images')}</div>

        <h4 className="mt-4">📄 Documents</h4>
        <div className="d-flex flex-wrap">{renderFilesByType('Documents')}</div>

        <h4 className="mt-4">📁 Others</h4>
        <div className="d-flex flex-wrap">{renderFilesByType('Others')}</div>
      </div>
    </div>
  );
};

export default FileOrganizer;
