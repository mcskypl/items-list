import React from 'react';

const InfoModal = ({ batch, exDate }) => (
  <>
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <li>{batch}</li>
        <li>{Date(exDate)}</li>
        <div />
        <div className="dropdown mt-3">
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>{batch}</li>
            <li>{Date(exDate)}</li>
          </ul>
        </div>
      </div>
    </div>
  </>

);

export default InfoModal;
