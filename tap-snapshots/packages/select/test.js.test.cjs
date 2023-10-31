/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
"use strict";
exports[
  `packages/select/test.js TAP Select component with no attributes is rendered on the page > must match snapshot 1`
] = `

      <option>First option</option>
      <option>Second option</option>
`;

exports[
  `packages/select/test.js TAP Select renders label > must match snapshot 1`
] = `
<label for="select_id">
            Options
            </label>
      <div class="input--select__wrap">
        <select id="select_id">
          
      <option>First option</option>
      <option>Second option</option>
    
        </select>
      </div>
      
`;

exports[
  `packages/select/test.js TAP Select renders with error > must match snapshot 1`
] = `

      <div class="input--select__wrap">
        <select id="select_id" aria-describedby="select_id__hint" aria-invalid="true" aria-errormessage="select_id__hint">
          
          <option>First option</option>
          <option>Second option</option>
        
        </select>
      </div>
      <div class="input__sub-text" id="select_id__hint">Something went wrong</div>
`;

exports[
  `packages/select/test.js TAP Select renders with hint > must match snapshot 1`
] = `

      <div class="input--select__wrap">
        <select id="select_id" aria-describedby="select_id__hint">
          
        <option>First option</option>
        <option>Second option</option>
      
        </select>
      </div>
      <div class="input__sub-text" id="select_id__hint">Hello</div>
`;
