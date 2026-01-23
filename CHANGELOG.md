# [2.5.0-next.2](https://github.com/warp-ds/elements/compare/v2.5.0-next.1...v2.5.0-next.2) (2026-01-23)


### Bug Fixes

* trigger publish to eik ([150d523](https://github.com/warp-ds/elements/commit/150d523198c02e417cde46ac084d5b61824fb5e0))

# [2.5.0-next.1](https://github.com/warp-ds/elements/compare/v2.4.0...v2.5.0-next.1) (2026-01-23)


### Bug Fixes

* [#421](https://github.com/warp-ds/elements/issues/421) don't apply min-max to the input field ([add39d8](https://github.com/warp-ds/elements/commit/add39d8585a6503f289b7830cc1e03cadee6c446))
* [#421](https://github.com/warp-ds/elements/issues/421) don't render the legend if there is no label ([957c713](https://github.com/warp-ds/elements/commit/957c713be03f0933b1b986267080cc30d06e6049))
* [#421](https://github.com/warp-ds/elements/issues/421) ensure that there's only one marker per thumb ([b4c9186](https://github.com/warp-ds/elements/commit/b4c9186b94d9b21bc2dbf8f4d8d03e049ab2e0cd))
* [#421](https://github.com/warp-ds/elements/issues/421) fix interaction problems in the range slider ([03c5167](https://github.com/warp-ds/elements/commit/03c51677d3a45c3fda40977c1b72654fa2507693))
* [#421](https://github.com/warp-ds/elements/issues/421) make going outside of boundaries work in a good way ([e292f28](https://github.com/warp-ds/elements/commit/e292f28757c06d4537e784a896f37dafd3ed0fcf))
* [#421](https://github.com/warp-ds/elements/issues/421) use the correct value for labels beneath the range slider ([7661c61](https://github.com/warp-ds/elements/commit/7661c6142907f344f41ad1151a2b11698e12b1a2))
* actually implement help-text ([5bdf46d](https://github.com/warp-ds/elements/commit/5bdf46d8364943f18cc91021e4a0db7edfd48b3d))
* add aria-labels, reflect: true, jsdoc comments and prop validation ([#495](https://github.com/warp-ds/elements/issues/495)) ([e846bcd](https://github.com/warp-ds/elements/commit/e846bcdc281f9317a8c097193ba1da84f0434590))
* add back in package.json exports ([7411f95](https://github.com/warp-ds/elements/commit/7411f95beb90ca5476bc2051f6ab78176925ac82))
* add components back in post release ([a35010b](https://github.com/warp-ds/elements/commit/a35010b1e39306a22b31b85dd29fe56a61f6c9dc))
* add missing components back into build ([#471](https://github.com/warp-ds/elements/issues/471)) ([1d025a6](https://github.com/warp-ds/elements/commit/1d025a66ec42e2c14999f4216d98e12e7cf812b8))
* add same help/validation message API as other form components ([#447](https://github.com/warp-ds/elements/issues/447)) ([b77940a](https://github.com/warp-ds/elements/commit/b77940a2813b20311117c6d106b85ca56acc6c7a))
* add support for step to textinput ([752101f](https://github.com/warp-ds/elements/commit/752101fad56b54e3c1776e2c7c3da0419c31c5f9))
* add the max value as an extra step before going over ([571fc9b](https://github.com/warp-ds/elements/commit/571fc9bde3bdef520f1892a3719744e34cc4bc1a))
* add translations for slider ([9688ca9](https://github.com/warp-ds/elements/commit/9688ca9f886be522ee468db17ff70854993ec8d3))
* add translations for slider! ([ab87c0a](https://github.com/warp-ds/elements/commit/ab87c0a12f97bc6be27217429ecbcb787c6195bd))
* align filenaming across components ([#464](https://github.com/warp-ds/elements/issues/464)) ([a6bb37b](https://github.com/warp-ds/elements/commit/a6bb37bb8dfdeff2aac9670d5e156ee184a52664))
* allow both values to be above or below min/max ([df0aba9](https://github.com/warp-ds/elements/commit/df0aba97fdd7fc6c24a3ae1b79e0cc795c18635d))
* always trigger the formatter ([7d05326](https://github.com/warp-ds/elements/commit/7d05326ec6164485885f1350822ab6f50d3510b4))
* calculate correct width and offset for progress bar ([d0776b8](https://github.com/warp-ds/elements/commit/d0776b8d293d4a8a0eb911c655dee20247f43a3c))
* checkbox styles, add w-checkbox-group component ([#438](https://github.com/warp-ds/elements/issues/438)) ([e07fa1a](https://github.com/warp-ds/elements/commit/e07fa1a263e1c06f87daa37103023f8f9f8dd3dd))
* clamp values on focus when range is at end ([2204f75](https://github.com/warp-ds/elements/commit/2204f75d6a89cfaf1fa5ff19d3d493190f6b93ac))
* don't rely on native events since they're broken in Safari ([28a43e3](https://github.com/warp-ds/elements/commit/28a43e306c54816b74559e9ef4a4124baa0772ed))
* don't to step calculation unless steps are defined ([7a3644f](https://github.com/warp-ds/elements/commit/7a3644ff00dbbe2df890176a273c8df3ffabc54e))
* fix interaction between steps and allowing values outside range ([bc7004b](https://github.com/warp-ds/elements/commit/bc7004bf653b2fc348f4b4e7f3b6e5f979eb18d2))
* implement error messages ([235387f](https://github.com/warp-ds/elements/commit/235387fc8b3b296fa796729ea0bc9c6bb05cdcbe))
* improve module resolution check for tabs ([ad51071](https://github.com/warp-ds/elements/commit/ad51071811c63fe71a679880d131bd7a3937044a))
* **link:** add missing quiet variant to validated options ([#479](https://github.com/warp-ds/elements/issues/479)) ([4d96c79](https://github.com/warp-ds/elements/commit/4d96c79e81e5afa21b78b75b466b1fd8cc1e342e))
* **link:** add missing variant, remove link variant ([#481](https://github.com/warp-ds/elements/issues/481)) ([5df8300](https://github.com/warp-ds/elements/commit/5df830071d4807adeaa0349aa95dc20948950ed2))
* **link:** remove unused properties ([#478](https://github.com/warp-ds/elements/issues/478)) ([5533b95](https://github.com/warp-ds/elements/commit/5533b95cf883571391226cf2248472e2ebedba60))
* make the error state flow top to bottom ([5dd1726](https://github.com/warp-ds/elements/commit/5dd1726c8321f278193b314f8e9d82b1a2fbef68))
* move most deps to dev deps ([#454](https://github.com/warp-ds/elements/issues/454)) ([61375a3](https://github.com/warp-ds/elements/commit/61375a3049e5a8fa896dd66056ba130e9878348e))
* prevent input field from being reset to min on input ([01c15c3](https://github.com/warp-ds/elements/commit/01c15c39642ecf27cad6e2b2950f483b5d74dd8d))
* re-enable unreleased components ([21b9a2c](https://github.com/warp-ds/elements/commit/21b9a2c1eb8d4afdc94d29984445a9e49942444d))
* refactor folder and filenames ([#489](https://github.com/warp-ds/elements/issues/489)) ([af5d8e1](https://github.com/warp-ds/elements/commit/af5d8e10dde93cdcc7a12f679680e1198b660b7f))
* release previous pls 🙏 ([140e97f](https://github.com/warp-ds/elements/commit/140e97f6ecb19d5c9a7e05c33010df7de2b50f76))
* remove duplicate definition of thumb.invalid ([9e169b8](https://github.com/warp-ds/elements/commit/9e169b876f3680b9a4c725e2a87538a5467f4531))
* rename step indicator ([#452](https://github.com/warp-ds/elements/issues/452)) ([a2d7a21](https://github.com/warp-ds/elements/commit/a2d7a21ab1d85212cb2eac960dddac56d02ea061))
* run messages compile ([c632b26](https://github.com/warp-ds/elements/commit/c632b263f9415ded4c9c9d25ce0ebccdeed9a895))
* separate internal and external states ([d8a74d9](https://github.com/warp-ds/elements/commit/d8a74d9ad32c7ab1efde33fda37336df064f233c))
* support external error change too ([0adfce6](https://github.com/warp-ds/elements/commit/0adfce63473753c05f16cf487edcb8ff665135da))
* tabs fixes ([eb0cc40](https://github.com/warp-ds/elements/commit/eb0cc4083e69789ef1c3d148872b05e4b7306ad1))
* **tabs:** use default slots instead of label property, small fixes  ([7850581](https://github.com/warp-ds/elements/commit/7850581fe321fc7890a8861b659afac21957c50a))
* trigger a field update when errors are removed ([5ec5fcf](https://github.com/warp-ds/elements/commit/5ec5fcf7e4eb579b95297c9c21dbe27c8c033726))
* **types:** add react wrapper .js extension when importing ([#436](https://github.com/warp-ds/elements/issues/436)) ([b8373d5](https://github.com/warp-ds/elements/commit/b8373d5e4254984a3a2aea7c70dc5ba19371b2c1))
* update crowdin.yml ([fce327b](https://github.com/warp-ds/elements/commit/fce327ba276b3e73cb6cd5af083527a883e0185a))
* update performance mark for pulse ([#461](https://github.com/warp-ds/elements/issues/461)) ([68e5bf5](https://github.com/warp-ds/elements/commit/68e5bf5391f2aecb8c4845c2e9fb063ae582b0b6))
* update range slider cross-field validity ([2d3f349](https://github.com/warp-ds/elements/commit/2d3f349e39db3d5430feed364bfebde85747aa44))
* updated styling and logic to make it possible ([#448](https://github.com/warp-ds/elements/issues/448)) ([92e3df7](https://github.com/warp-ds/elements/commit/92e3df7bd5e3095869e903a8563a927aa7267135))
* use correct type for invalid state in textinput ([0adc7fd](https://github.com/warp-ds/elements/commit/0adc7fd1ecf2ea4462eaa687f02bbf90018ae759))
* use explicit exports to support module resolution from 🦖-age ([edf4319](https://github.com/warp-ds/elements/commit/edf431939426dec5d2ea4ad0e4deafb4f16139dc))
* use non-static token for inverted text ([8bd33aa](https://github.com/warp-ds/elements/commit/8bd33aa4570a63218cf47781fd2b5b05b336bfbc))
* use the correct value type for allowValuesOutsideRange ([fbbd658](https://github.com/warp-ds/elements/commit/fbbd6586030f1e41c051e54c1cff865756559a37))
* use tooltip text as aria description for value ([ae6d622](https://github.com/warp-ds/elements/commit/ae6d6229aa89c4e49e8421cf790a77bb4fd8b55a))
* z-index stack ([ec88fe3](https://github.com/warp-ds/elements/commit/ec88fe3b09d5315960b6ff0e435262b536a7c5db))
* z-index stacking order ([5eae561](https://github.com/warp-ds/elements/commit/5eae561dbf2fa4fe1a51ae8dd0d6a942ff0fb3be))


### Features

* add autocomplete option to textfield and combobox ([#484](https://github.com/warp-ds/elements/issues/484)) ([4708239](https://github.com/warp-ds/elements/commit/4708239429d0d81d7241c20a466b9566f3642db1))
* add icon component with storybook support and styles ([#493](https://github.com/warp-ds/elements/issues/493)) ([7b78621](https://github.com/warp-ds/elements/commit/7b78621231967b7b0be1c7e557ace67ed62ac04e))
* add new component w-textarea ([#439](https://github.com/warp-ds/elements/issues/439)) ([bf7d781](https://github.com/warp-ds/elements/commit/bf7d78199242dc0368cfc6f566540f56da0902a3))
* add performance measuring to eik bundle ([5951664](https://github.com/warp-ds/elements/commit/595166499172f36398a53ac9e2403557bd79c5d6))
* expose pagination and slider for testing ([c673d42](https://github.com/warp-ds/elements/commit/c673d42a4c40dc041e3c8cfb7dbf5511a0ccd7fb))
* form participation in combobox ([#467](https://github.com/warp-ds/elements/issues/467)) ([6d6b3f1](https://github.com/warp-ds/elements/commit/6d6b3f18301dfbfd5f15b6a6080881dc279b4cae))
* introduce button border radius tokens ([#491](https://github.com/warp-ds/elements/issues/491)) ([229ca67](https://github.com/warp-ds/elements/commit/229ca676d9adc2e85456178af89aba1758c3e0e7))
* rework tabs structure ([#486](https://github.com/warp-ds/elements/issues/486)) ([d919391](https://github.com/warp-ds/elements/commit/d91939109851e610ee51e5a2486bd6e90859d6f7))

# [2.4.0-next.12](https://github.com/warp-ds/elements/compare/v2.4.0-next.11...v2.4.0-next.12) (2026-01-23)


### Bug Fixes

* update crowdin.yml ([fce327b](https://github.com/warp-ds/elements/commit/fce327ba276b3e73cb6cd5af083527a883e0185a))

# [2.4.0-next.11](https://github.com/warp-ds/elements/compare/v2.4.0-next.10...v2.4.0-next.11) (2026-01-23)


### Bug Fixes

* add aria-labels, reflect: true, jsdoc comments and prop validation ([#495](https://github.com/warp-ds/elements/issues/495)) ([e846bcd](https://github.com/warp-ds/elements/commit/e846bcdc281f9317a8c097193ba1da84f0434590))

# [2.4.0-next.10](https://github.com/warp-ds/elements/compare/v2.4.0-next.9...v2.4.0-next.10) (2026-01-22)


### Features

* add icon component with storybook support and styles ([#493](https://github.com/warp-ds/elements/issues/493)) ([7b78621](https://github.com/warp-ds/elements/commit/7b78621231967b7b0be1c7e557ace67ed62ac04e))

# [2.4.0-next.9](https://github.com/warp-ds/elements/compare/v2.4.0-next.8...v2.4.0-next.9) (2026-01-22)


### Bug Fixes

* **tabs:** use default slots instead of label property, small fixes  ([7850581](https://github.com/warp-ds/elements/commit/7850581fe321fc7890a8861b659afac21957c50a))

# [2.4.0-next.8](https://github.com/warp-ds/elements/compare/v2.4.0-next.7...v2.4.0-next.8) (2026-01-21)


### Features

* introduce button border radius tokens ([#491](https://github.com/warp-ds/elements/issues/491)) ([229ca67](https://github.com/warp-ds/elements/commit/229ca676d9adc2e85456178af89aba1758c3e0e7))

# [2.4.0-next.7](https://github.com/warp-ds/elements/compare/v2.4.0-next.6...v2.4.0-next.7) (2026-01-20)


### Bug Fixes

* refactor folder and filenames ([#489](https://github.com/warp-ds/elements/issues/489)) ([af5d8e1](https://github.com/warp-ds/elements/commit/af5d8e10dde93cdcc7a12f679680e1198b660b7f))

# [2.4.0-next.6](https://github.com/warp-ds/elements/compare/v2.4.0-next.5...v2.4.0-next.6) (2026-01-19)


### Bug Fixes

* add back in package.json exports ([7411f95](https://github.com/warp-ds/elements/commit/7411f95beb90ca5476bc2051f6ab78176925ac82))
* improve module resolution check for tabs ([ad51071](https://github.com/warp-ds/elements/commit/ad51071811c63fe71a679880d131bd7a3937044a))

# [2.4.0-next.5](https://github.com/warp-ds/elements/compare/v2.4.0-next.4...v2.4.0-next.5) (2026-01-19)


### Bug Fixes

* re-enable unreleased components ([21b9a2c](https://github.com/warp-ds/elements/commit/21b9a2c1eb8d4afdc94d29984445a9e49942444d))

# [2.4.0-next.4](https://github.com/warp-ds/elements/compare/v2.4.0-next.3...v2.4.0-next.4) (2026-01-19)


### Features

* rework tabs structure ([#486](https://github.com/warp-ds/elements/issues/486)) ([d919391](https://github.com/warp-ds/elements/commit/d91939109851e610ee51e5a2486bd6e90859d6f7))

# [2.4.0](https://github.com/warp-ds/elements/compare/v2.3.2...v2.4.0) (2026-01-16)


### Features

* release w-switch and w-combobox ([#488](https://github.com/warp-ds/elements/issues/488)) ([5cd69b1](https://github.com/warp-ds/elements/commit/5cd69b10f94b6e003de13413f6a2c0aababbcb1b))

# [2.4.0-next.3](https://github.com/warp-ds/elements/compare/v2.4.0-next.2...v2.4.0-next.3) (2026-01-13)


### Features

* add autocomplete option to textfield and combobox ([#484](https://github.com/warp-ds/elements/issues/484)) ([4708239](https://github.com/warp-ds/elements/commit/4708239429d0d81d7241c20a466b9566f3642db1))

# [2.4.0-next.2](https://github.com/warp-ds/elements/compare/v2.4.0-next.1...v2.4.0-next.2) (2026-01-13)


### Bug Fixes

* calculate correct width and offset for progress bar ([d0776b8](https://github.com/warp-ds/elements/commit/d0776b8d293d4a8a0eb911c655dee20247f43a3c))

# [2.4.0-next.1](https://github.com/warp-ds/elements/compare/v2.3.2...v2.4.0-next.1) (2026-01-12)


### Bug Fixes

* [#421](https://github.com/warp-ds/elements/issues/421) don't apply min-max to the input field ([add39d8](https://github.com/warp-ds/elements/commit/add39d8585a6503f289b7830cc1e03cadee6c446))
* [#421](https://github.com/warp-ds/elements/issues/421) don't render the legend if there is no label ([957c713](https://github.com/warp-ds/elements/commit/957c713be03f0933b1b986267080cc30d06e6049))
* [#421](https://github.com/warp-ds/elements/issues/421) ensure that there's only one marker per thumb ([b4c9186](https://github.com/warp-ds/elements/commit/b4c9186b94d9b21bc2dbf8f4d8d03e049ab2e0cd))
* [#421](https://github.com/warp-ds/elements/issues/421) fix interaction problems in the range slider ([03c5167](https://github.com/warp-ds/elements/commit/03c51677d3a45c3fda40977c1b72654fa2507693))
* [#421](https://github.com/warp-ds/elements/issues/421) make going outside of boundaries work in a good way ([e292f28](https://github.com/warp-ds/elements/commit/e292f28757c06d4537e784a896f37dafd3ed0fcf))
* [#421](https://github.com/warp-ds/elements/issues/421) use the correct value for labels beneath the range slider ([7661c61](https://github.com/warp-ds/elements/commit/7661c6142907f344f41ad1151a2b11698e12b1a2))
* actually implement help-text ([5bdf46d](https://github.com/warp-ds/elements/commit/5bdf46d8364943f18cc91021e4a0db7edfd48b3d))
* add components back in post release ([a35010b](https://github.com/warp-ds/elements/commit/a35010b1e39306a22b31b85dd29fe56a61f6c9dc))
* add missing components back into build ([#471](https://github.com/warp-ds/elements/issues/471)) ([1d025a6](https://github.com/warp-ds/elements/commit/1d025a66ec42e2c14999f4216d98e12e7cf812b8))
* add same help/validation message API as other form components ([#447](https://github.com/warp-ds/elements/issues/447)) ([b77940a](https://github.com/warp-ds/elements/commit/b77940a2813b20311117c6d106b85ca56acc6c7a))
* add support for step to textinput ([752101f](https://github.com/warp-ds/elements/commit/752101fad56b54e3c1776e2c7c3da0419c31c5f9))
* add the max value as an extra step before going over ([571fc9b](https://github.com/warp-ds/elements/commit/571fc9bde3bdef520f1892a3719744e34cc4bc1a))
* add translations for slider ([9688ca9](https://github.com/warp-ds/elements/commit/9688ca9f886be522ee468db17ff70854993ec8d3))
* add translations for slider! ([ab87c0a](https://github.com/warp-ds/elements/commit/ab87c0a12f97bc6be27217429ecbcb787c6195bd))
* align filenaming across components ([#464](https://github.com/warp-ds/elements/issues/464)) ([a6bb37b](https://github.com/warp-ds/elements/commit/a6bb37bb8dfdeff2aac9670d5e156ee184a52664))
* allow both values to be above or below min/max ([df0aba9](https://github.com/warp-ds/elements/commit/df0aba97fdd7fc6c24a3ae1b79e0cc795c18635d))
* always trigger the formatter ([7d05326](https://github.com/warp-ds/elements/commit/7d05326ec6164485885f1350822ab6f50d3510b4))
* checkbox styles, add w-checkbox-group component ([#438](https://github.com/warp-ds/elements/issues/438)) ([e07fa1a](https://github.com/warp-ds/elements/commit/e07fa1a263e1c06f87daa37103023f8f9f8dd3dd))
* clamp values on focus when range is at end ([2204f75](https://github.com/warp-ds/elements/commit/2204f75d6a89cfaf1fa5ff19d3d493190f6b93ac))
* don't rely on native events since they're broken in Safari ([28a43e3](https://github.com/warp-ds/elements/commit/28a43e306c54816b74559e9ef4a4124baa0772ed))
* don't to step calculation unless steps are defined ([7a3644f](https://github.com/warp-ds/elements/commit/7a3644ff00dbbe2df890176a273c8df3ffabc54e))
* fix interaction between steps and allowing values outside range ([bc7004b](https://github.com/warp-ds/elements/commit/bc7004bf653b2fc348f4b4e7f3b6e5f979eb18d2))
* implement error messages ([235387f](https://github.com/warp-ds/elements/commit/235387fc8b3b296fa796729ea0bc9c6bb05cdcbe))
* **link:** add missing quiet variant to validated options ([#479](https://github.com/warp-ds/elements/issues/479)) ([4d96c79](https://github.com/warp-ds/elements/commit/4d96c79e81e5afa21b78b75b466b1fd8cc1e342e))
* **link:** add missing variant, remove link variant ([#481](https://github.com/warp-ds/elements/issues/481)) ([5df8300](https://github.com/warp-ds/elements/commit/5df830071d4807adeaa0349aa95dc20948950ed2))
* **link:** remove unused properties ([#478](https://github.com/warp-ds/elements/issues/478)) ([5533b95](https://github.com/warp-ds/elements/commit/5533b95cf883571391226cf2248472e2ebedba60))
* make the error state flow top to bottom ([5dd1726](https://github.com/warp-ds/elements/commit/5dd1726c8321f278193b314f8e9d82b1a2fbef68))
* move most deps to dev deps ([#454](https://github.com/warp-ds/elements/issues/454)) ([61375a3](https://github.com/warp-ds/elements/commit/61375a3049e5a8fa896dd66056ba130e9878348e))
* prevent input field from being reset to min on input ([01c15c3](https://github.com/warp-ds/elements/commit/01c15c39642ecf27cad6e2b2950f483b5d74dd8d))
* release previous pls 🙏 ([140e97f](https://github.com/warp-ds/elements/commit/140e97f6ecb19d5c9a7e05c33010df7de2b50f76))
* remove duplicate definition of thumb.invalid ([9e169b8](https://github.com/warp-ds/elements/commit/9e169b876f3680b9a4c725e2a87538a5467f4531))
* rename step indicator ([#452](https://github.com/warp-ds/elements/issues/452)) ([a2d7a21](https://github.com/warp-ds/elements/commit/a2d7a21ab1d85212cb2eac960dddac56d02ea061))
* run messages compile ([c632b26](https://github.com/warp-ds/elements/commit/c632b263f9415ded4c9c9d25ce0ebccdeed9a895))
* separate internal and external states ([d8a74d9](https://github.com/warp-ds/elements/commit/d8a74d9ad32c7ab1efde33fda37336df064f233c))
* support external error change too ([0adfce6](https://github.com/warp-ds/elements/commit/0adfce63473753c05f16cf487edcb8ff665135da))
* tabs fixes ([eb0cc40](https://github.com/warp-ds/elements/commit/eb0cc4083e69789ef1c3d148872b05e4b7306ad1))
* trigger a field update when errors are removed ([5ec5fcf](https://github.com/warp-ds/elements/commit/5ec5fcf7e4eb579b95297c9c21dbe27c8c033726))
* **types:** add react wrapper .js extension when importing ([#436](https://github.com/warp-ds/elements/issues/436)) ([b8373d5](https://github.com/warp-ds/elements/commit/b8373d5e4254984a3a2aea7c70dc5ba19371b2c1))
* update performance mark for pulse ([#461](https://github.com/warp-ds/elements/issues/461)) ([68e5bf5](https://github.com/warp-ds/elements/commit/68e5bf5391f2aecb8c4845c2e9fb063ae582b0b6))
* update range slider cross-field validity ([2d3f349](https://github.com/warp-ds/elements/commit/2d3f349e39db3d5430feed364bfebde85747aa44))
* updated styling and logic to make it possible ([#448](https://github.com/warp-ds/elements/issues/448)) ([92e3df7](https://github.com/warp-ds/elements/commit/92e3df7bd5e3095869e903a8563a927aa7267135))
* use correct type for invalid state in textinput ([0adc7fd](https://github.com/warp-ds/elements/commit/0adc7fd1ecf2ea4462eaa687f02bbf90018ae759))
* use explicit exports to support module resolution from 🦖-age ([edf4319](https://github.com/warp-ds/elements/commit/edf431939426dec5d2ea4ad0e4deafb4f16139dc))
* use non-static token for inverted text ([8bd33aa](https://github.com/warp-ds/elements/commit/8bd33aa4570a63218cf47781fd2b5b05b336bfbc))
* use the correct value type for allowValuesOutsideRange ([fbbd658](https://github.com/warp-ds/elements/commit/fbbd6586030f1e41c051e54c1cff865756559a37))
* use tooltip text as aria description for value ([ae6d622](https://github.com/warp-ds/elements/commit/ae6d6229aa89c4e49e8421cf790a77bb4fd8b55a))
* z-index stack ([ec88fe3](https://github.com/warp-ds/elements/commit/ec88fe3b09d5315960b6ff0e435262b536a7c5db))
* z-index stacking order ([5eae561](https://github.com/warp-ds/elements/commit/5eae561dbf2fa4fe1a51ae8dd0d6a942ff0fb3be))


### Features

* add new component w-textarea ([#439](https://github.com/warp-ds/elements/issues/439)) ([bf7d781](https://github.com/warp-ds/elements/commit/bf7d78199242dc0368cfc6f566540f56da0902a3))
* add performance measuring to eik bundle ([5951664](https://github.com/warp-ds/elements/commit/595166499172f36398a53ac9e2403557bd79c5d6))
* expose pagination and slider for testing ([c673d42](https://github.com/warp-ds/elements/commit/c673d42a4c40dc041e3c8cfb7dbf5511a0ccd7fb))
* form participation in combobox ([#467](https://github.com/warp-ds/elements/issues/467)) ([6d6b3f1](https://github.com/warp-ds/elements/commit/6d6b3f18301dfbfd5f15b6a6080881dc279b4cae))

## [2.3.2](https://github.com/warp-ds/elements/compare/v2.3.1...v2.3.2) (2026-01-09)


### Bug Fixes

* ensure custom element manifest also includes datepicker ([d0a0d29](https://github.com/warp-ds/elements/commit/d0a0d297774375cb2f262517224d522080f7ea1c))

## [2.3.1](https://github.com/warp-ds/elements/compare/v2.3.0...v2.3.1) (2026-01-09)


### Bug Fixes

* ensure datepicker is included in bundle ([ea3af88](https://github.com/warp-ds/elements/commit/ea3af88f8084a925a4cbe2b6e3a5a0f0a6f64020))

# [2.3.0](https://github.com/warp-ds/elements/compare/v2.2.1...v2.3.0) (2026-01-09)


### Features

* release w-datepicker and w-link ([#483](https://github.com/warp-ds/elements/issues/483)) ([8adac6c](https://github.com/warp-ds/elements/commit/8adac6c1ead4403ec555dea569ee30dd3bb3d0f7))

# [2.3.0-next.32](https://github.com/warp-ds/elements/compare/v2.3.0-next.31...v2.3.0-next.32) (2026-01-09)


### Bug Fixes

* **link:** add missing variant, remove link variant ([#481](https://github.com/warp-ds/elements/issues/481)) ([5df8300](https://github.com/warp-ds/elements/commit/5df830071d4807adeaa0349aa95dc20948950ed2))

# [2.3.0-next.31](https://github.com/warp-ds/elements/compare/v2.3.0-next.30...v2.3.0-next.31) (2026-01-09)


### Bug Fixes

* **link:** add missing quiet variant to validated options ([#479](https://github.com/warp-ds/elements/issues/479)) ([4d96c79](https://github.com/warp-ds/elements/commit/4d96c79e81e5afa21b78b75b466b1fd8cc1e342e))

# [2.3.0-next.30](https://github.com/warp-ds/elements/compare/v2.3.0-next.29...v2.3.0-next.30) (2026-01-09)


### Bug Fixes

* **link:** remove unused properties ([#478](https://github.com/warp-ds/elements/issues/478)) ([5533b95](https://github.com/warp-ds/elements/commit/5533b95cf883571391226cf2248472e2ebedba60))

# [2.3.0-next.29](https://github.com/warp-ds/elements/compare/v2.3.0-next.28...v2.3.0-next.29) (2026-01-07)


### Bug Fixes

* z-index stack ([ec88fe3](https://github.com/warp-ds/elements/commit/ec88fe3b09d5315960b6ff0e435262b536a7c5db))
* z-index stacking order ([5eae561](https://github.com/warp-ds/elements/commit/5eae561dbf2fa4fe1a51ae8dd0d6a942ff0fb3be))

# [2.3.0-next.28](https://github.com/warp-ds/elements/compare/v2.3.0-next.27...v2.3.0-next.28) (2025-12-30)


### Bug Fixes

* support external error change too ([0adfce6](https://github.com/warp-ds/elements/commit/0adfce63473753c05f16cf487edcb8ff665135da))
* trigger a field update when errors are removed ([5ec5fcf](https://github.com/warp-ds/elements/commit/5ec5fcf7e4eb579b95297c9c21dbe27c8c033726))

# [2.3.0-next.27](https://github.com/warp-ds/elements/compare/v2.3.0-next.26...v2.3.0-next.27) (2025-12-29)


### Bug Fixes

* allow both values to be above or below min/max ([df0aba9](https://github.com/warp-ds/elements/commit/df0aba97fdd7fc6c24a3ae1b79e0cc795c18635d))

# [2.3.0-next.26](https://github.com/warp-ds/elements/compare/v2.3.0-next.25...v2.3.0-next.26) (2025-12-22)


### Bug Fixes

* add missing components back into build ([#471](https://github.com/warp-ds/elements/issues/471)) ([1d025a6](https://github.com/warp-ds/elements/commit/1d025a66ec42e2c14999f4216d98e12e7cf812b8))

# [2.3.0-next.25](https://github.com/warp-ds/elements/compare/v2.3.0-next.24...v2.3.0-next.25) (2025-12-18)


### Features

* form participation in combobox ([#467](https://github.com/warp-ds/elements/issues/467)) ([6d6b3f1](https://github.com/warp-ds/elements/commit/6d6b3f18301dfbfd5f15b6a6080881dc279b4cae))

# [2.3.0-next.24](https://github.com/warp-ds/elements/compare/v2.3.0-next.23...v2.3.0-next.24) (2025-12-15)


### Bug Fixes

* add translations for slider! ([ab87c0a](https://github.com/warp-ds/elements/commit/ab87c0a12f97bc6be27217429ecbcb787c6195bd))

# [2.3.0-next.23](https://github.com/warp-ds/elements/compare/v2.3.0-next.22...v2.3.0-next.23) (2025-12-15)


### Bug Fixes

* run messages compile ([c632b26](https://github.com/warp-ds/elements/commit/c632b263f9415ded4c9c9d25ce0ebccdeed9a895))

# [2.3.0-next.22](https://github.com/warp-ds/elements/compare/v2.3.0-next.21...v2.3.0-next.22) (2025-12-15)


### Bug Fixes

* add translations for slider ([9688ca9](https://github.com/warp-ds/elements/commit/9688ca9f886be522ee468db17ff70854993ec8d3))

# [2.3.0-next.21](https://github.com/warp-ds/elements/compare/v2.3.0-next.20...v2.3.0-next.21) (2025-12-15)


### Bug Fixes

* align filenaming across components ([#464](https://github.com/warp-ds/elements/issues/464)) ([a6bb37b](https://github.com/warp-ds/elements/commit/a6bb37bb8dfdeff2aac9670d5e156ee184a52664))

# [2.3.0-next.20](https://github.com/warp-ds/elements/compare/v2.3.0-next.19...v2.3.0-next.20) (2025-12-12)


### Bug Fixes

* actually implement help-text ([5bdf46d](https://github.com/warp-ds/elements/commit/5bdf46d8364943f18cc91021e4a0db7edfd48b3d))
* add support for step to textinput ([752101f](https://github.com/warp-ds/elements/commit/752101fad56b54e3c1776e2c7c3da0419c31c5f9))
* clamp values on focus when range is at end ([2204f75](https://github.com/warp-ds/elements/commit/2204f75d6a89cfaf1fa5ff19d3d493190f6b93ac))
* implement error messages ([235387f](https://github.com/warp-ds/elements/commit/235387fc8b3b296fa796729ea0bc9c6bb05cdcbe))
* make the error state flow top to bottom ([5dd1726](https://github.com/warp-ds/elements/commit/5dd1726c8321f278193b314f8e9d82b1a2fbef68))
* remove duplicate definition of thumb.invalid ([9e169b8](https://github.com/warp-ds/elements/commit/9e169b876f3680b9a4c725e2a87538a5467f4531))
* separate internal and external states ([d8a74d9](https://github.com/warp-ds/elements/commit/d8a74d9ad32c7ab1efde33fda37336df064f233c))
* update performance mark for pulse ([#461](https://github.com/warp-ds/elements/issues/461)) ([68e5bf5](https://github.com/warp-ds/elements/commit/68e5bf5391f2aecb8c4845c2e9fb063ae582b0b6))
* use correct type for invalid state in textinput ([0adc7fd](https://github.com/warp-ds/elements/commit/0adc7fd1ecf2ea4462eaa687f02bbf90018ae759))

# [2.3.0-next.19](https://github.com/warp-ds/elements/compare/v2.3.0-next.18...v2.3.0-next.19) (2025-12-08)


### Bug Fixes

* rename step indicator ([#452](https://github.com/warp-ds/elements/issues/452)) ([a2d7a21](https://github.com/warp-ds/elements/commit/a2d7a21ab1d85212cb2eac960dddac56d02ea061))

# [2.3.0-next.18](https://github.com/warp-ds/elements/compare/v2.3.0-next.17...v2.3.0-next.18) (2025-12-08)


### Bug Fixes

* move most deps to dev deps ([#454](https://github.com/warp-ds/elements/issues/454)) ([61375a3](https://github.com/warp-ds/elements/commit/61375a3049e5a8fa896dd66056ba130e9878348e))

# [2.3.0-next.17](https://github.com/warp-ds/elements/compare/v2.3.0-next.16...v2.3.0-next.17) (2025-12-04)


### Bug Fixes

* don't rely on native events since they're broken in Safari ([28a43e3](https://github.com/warp-ds/elements/commit/28a43e306c54816b74559e9ef4a4124baa0772ed))

# [2.3.0-next.16](https://github.com/warp-ds/elements/compare/v2.3.0-next.15...v2.3.0-next.16) (2025-12-03)


### Bug Fixes

* use non-static token for inverted text ([8bd33aa](https://github.com/warp-ds/elements/commit/8bd33aa4570a63218cf47781fd2b5b05b336bfbc))

# [2.3.0-next.15](https://github.com/warp-ds/elements/compare/v2.3.0-next.14...v2.3.0-next.15) (2025-12-03)


### Bug Fixes

* don't to step calculation unless steps are defined ([7a3644f](https://github.com/warp-ds/elements/commit/7a3644ff00dbbe2df890176a273c8df3ffabc54e))

# [2.3.0-next.14](https://github.com/warp-ds/elements/compare/v2.3.0-next.13...v2.3.0-next.14) (2025-12-03)


### Bug Fixes

* fix interaction between steps and allowing values outside range ([bc7004b](https://github.com/warp-ds/elements/commit/bc7004bf653b2fc348f4b4e7f3b6e5f979eb18d2))

# [2.3.0-next.13](https://github.com/warp-ds/elements/compare/v2.3.0-next.12...v2.3.0-next.13) (2025-12-02)


### Bug Fixes

* release previous pls 🙏 ([140e97f](https://github.com/warp-ds/elements/commit/140e97f6ecb19d5c9a7e05c33010df7de2b50f76))

# [2.3.0-next.12](https://github.com/warp-ds/elements/compare/v2.3.0-next.11...v2.3.0-next.12) (2025-12-01)


### Bug Fixes

* [#421](https://github.com/warp-ds/elements/issues/421) don't apply min-max to the input field ([add39d8](https://github.com/warp-ds/elements/commit/add39d8585a6503f289b7830cc1e03cadee6c446))
* [#421](https://github.com/warp-ds/elements/issues/421) don't render the legend if there is no label ([957c713](https://github.com/warp-ds/elements/commit/957c713be03f0933b1b986267080cc30d06e6049))
* [#421](https://github.com/warp-ds/elements/issues/421) ensure that there's only one marker per thumb ([b4c9186](https://github.com/warp-ds/elements/commit/b4c9186b94d9b21bc2dbf8f4d8d03e049ab2e0cd))
* [#421](https://github.com/warp-ds/elements/issues/421) fix interaction problems in the range slider ([03c5167](https://github.com/warp-ds/elements/commit/03c51677d3a45c3fda40977c1b72654fa2507693))
* [#421](https://github.com/warp-ds/elements/issues/421) make going outside of boundaries work in a good way ([e292f28](https://github.com/warp-ds/elements/commit/e292f28757c06d4537e784a896f37dafd3ed0fcf))
* [#421](https://github.com/warp-ds/elements/issues/421) use the correct value for labels beneath the range slider ([7661c61](https://github.com/warp-ds/elements/commit/7661c6142907f344f41ad1151a2b11698e12b1a2))
* add the max value as an extra step before going over ([571fc9b](https://github.com/warp-ds/elements/commit/571fc9bde3bdef520f1892a3719744e34cc4bc1a))
* always trigger the formatter ([7d05326](https://github.com/warp-ds/elements/commit/7d05326ec6164485885f1350822ab6f50d3510b4))
* prevent input field from being reset to min on input ([01c15c3](https://github.com/warp-ds/elements/commit/01c15c39642ecf27cad6e2b2950f483b5d74dd8d))
* update range slider cross-field validity ([2d3f349](https://github.com/warp-ds/elements/commit/2d3f349e39db3d5430feed364bfebde85747aa44))
* use the correct value type for allowValuesOutsideRange ([fbbd658](https://github.com/warp-ds/elements/commit/fbbd6586030f1e41c051e54c1cff865756559a37))
* use tooltip text as aria description for value ([ae6d622](https://github.com/warp-ds/elements/commit/ae6d6229aa89c4e49e8421cf790a77bb4fd8b55a))

# [2.3.0-next.11](https://github.com/warp-ds/elements/compare/v2.3.0-next.10...v2.3.0-next.11) (2025-11-25)


### Bug Fixes

* add same help/validation message API as other form components ([#447](https://github.com/warp-ds/elements/issues/447)) ([b77940a](https://github.com/warp-ds/elements/commit/b77940a2813b20311117c6d106b85ca56acc6c7a))

# [2.3.0-next.10](https://github.com/warp-ds/elements/compare/v2.3.0-next.9...v2.3.0-next.10) (2025-11-25)


### Bug Fixes

* updated styling and logic to make it possible ([#448](https://github.com/warp-ds/elements/issues/448)) ([92e3df7](https://github.com/warp-ds/elements/commit/92e3df7bd5e3095869e903a8563a927aa7267135))

# [2.3.0-next.9](https://github.com/warp-ds/elements/compare/v2.3.0-next.8...v2.3.0-next.9) (2025-11-24)


### Bug Fixes

* tabs fixes ([eb0cc40](https://github.com/warp-ds/elements/commit/eb0cc4083e69789ef1c3d148872b05e4b7306ad1))

# [2.3.0-next.8](https://github.com/warp-ds/elements/compare/v2.3.0-next.7...v2.3.0-next.8) (2025-11-24)


### Bug Fixes

* checkbox styles, add w-checkbox-group component ([#438](https://github.com/warp-ds/elements/issues/438)) ([e07fa1a](https://github.com/warp-ds/elements/commit/e07fa1a263e1c06f87daa37103023f8f9f8dd3dd))

# [2.3.0-next.7](https://github.com/warp-ds/elements/compare/v2.3.0-next.6...v2.3.0-next.7) (2025-11-21)


### Bug Fixes

* use correct tokens for primary link ([#443](https://github.com/warp-ds/elements/issues/443)) ([b1b05b9](https://github.com/warp-ds/elements/commit/b1b05b90a4dae2be02d05358617cce01039840d8))

# [2.3.0-next.6](https://github.com/warp-ds/elements/compare/v2.3.0-next.5...v2.3.0-next.6) (2025-11-21)


### Features

* add new component w-textarea ([#439](https://github.com/warp-ds/elements/issues/439)) ([bf7d781](https://github.com/warp-ds/elements/commit/bf7d78199242dc0368cfc6f566540f56da0902a3))

# [2.3.0-next.5](https://github.com/warp-ds/elements/compare/v2.3.0-next.4...v2.3.0-next.5) (2025-11-21)


### Features

* add performance measuring to eik bundle ([5951664](https://github.com/warp-ds/elements/commit/595166499172f36398a53ac9e2403557bd79c5d6))

# [2.3.0-next.4](https://github.com/warp-ds/elements/compare/v2.3.0-next.3...v2.3.0-next.4) (2025-11-20)


### Bug Fixes

* **types:** add react wrapper .js extension when importing ([#436](https://github.com/warp-ds/elements/issues/436)) ([b8373d5](https://github.com/warp-ds/elements/commit/b8373d5e4254984a3a2aea7c70dc5ba19371b2c1))

# [2.3.0-next.3](https://github.com/warp-ds/elements/compare/v2.3.0-next.2...v2.3.0-next.3) (2025-11-13)


### Bug Fixes

* use explicit exports to support module resolution from 🦖-age ([edf4319](https://github.com/warp-ds/elements/commit/edf431939426dec5d2ea4ad0e4deafb4f16139dc))

# [2.3.0-next.2](https://github.com/warp-ds/elements/compare/v2.3.0-next.1...v2.3.0-next.2) (2025-11-12)


### Bug Fixes

* add components back in post release ([a35010b](https://github.com/warp-ds/elements/commit/a35010b1e39306a22b31b85dd29fe56a61f6c9dc))

# [2.3.0-next.1](https://github.com/warp-ds/elements/compare/v2.2.0...v2.3.0-next.1) (2025-11-12)


### Features

* expose pagination and slider for testing ([c673d42](https://github.com/warp-ds/elements/commit/c673d42a4c40dc041e3c8cfb7dbf5511a0ccd7fb))


## [2.2.1](https://github.com/warp-ds/elements/compare/v2.2.0...v2.2.1) (2025-11-21)


### Bug Fixes

* use correct tokens for primary link ([#443](https://github.com/warp-ds/elements/issues/443)) ([b1b05b9](https://github.com/warp-ds/elements/commit/b1b05b90a4dae2be02d05358617cce01039840d8))

# [2.2.0](https://github.com/warp-ds/elements/compare/v2.1.1...v2.2.0) (2025-11-10)


### Bug Fixes

* add backwards compatible builds for packages ([#411](https://github.com/warp-ds/elements/issues/411)) ([68b2ebf](https://github.com/warp-ds/elements/commit/68b2ebf72de84508aef83ca17f6d23e3e83a3a39))
* add build css for cloaking ([d175130](https://github.com/warp-ds/elements/commit/d17513044445642edfa7c8f58c06bfa8db368742))
* add form association to select ([eaebfd0](https://github.com/warp-ds/elements/commit/eaebfd0936ddb34eed6f9ebff4b11987d370a9e9))
* add form participation to w-button ([5870570](https://github.com/warp-ds/elements/commit/58705705ee215b527e1830da61c9eee74c09e9eb))
* add form participation to w-textfield ([ac13366](https://github.com/warp-ds/elements/commit/ac13366ebfb72713e7acd131be2ecc6d17003f4d))
* add missing utility dependencies ([9b8c35f](https://github.com/warp-ds/elements/commit/9b8c35f2dd2e95ecff4027bc71c9436461dbd3eb))
* add types build command ([2499704](https://github.com/warp-ds/elements/commit/2499704e436e1aa90bc2f044cab188584cc864b0))
* adding link component ([b5a737d](https://github.com/warp-ds/elements/commit/b5a737d344237cfe7eb5785fb7fe0e9ac3dc01c3))
* adding setup test script for tests ([b02f5b4](https://github.com/warp-ds/elements/commit/b02f5b4143590c888619dcd4ed9b15f01d68bbfa))
* box missing last-child slotted selector and button-as-link ([#348](https://github.com/warp-ds/elements/issues/348)) ([4367c1c](https://github.com/warp-ds/elements/commit/4367c1cf05deefa247818a200a60f4465c7e8241))
* center icons and buttons, and don't trigger click on icons ([#347](https://github.com/warp-ds/elements/issues/347)) ([c25a0de](https://github.com/warp-ds/elements/commit/c25a0deebf9d76d6d11851463442fcca7a26f79a))
* cut release to test change of exports and setup ([9b17365](https://github.com/warp-ds/elements/commit/9b17365d45c2f360c033dd255d42dd4254d480eb))
* decouple react wrappers ([#359](https://github.com/warp-ds/elements/issues/359)) ([a81ca55](https://github.com/warp-ds/elements/commit/a81ca5507d75190877e967e014bd67c3ffa07374))
* don't update slider position when emptying textfield ([0384af1](https://github.com/warp-ds/elements/commit/0384af1d1bf42040cc8ea29d83501f12b91ef097))
* ensure bundle exports match previous bundle exports ([#413](https://github.com/warp-ds/elements/issues/413)) ([d5fce40](https://github.com/warp-ds/elements/commit/d5fce402c5afc62fb874b40e02a40e1ffc2f4b58))
* ensure w-step is loaded before setContext is used ([b653a55](https://github.com/warp-ds/elements/commit/b653a55bd4fab852d6cfaabcef5e046f3cc0f963))
* fix lint error ([fa6bd1c](https://github.com/warp-ds/elements/commit/fa6bd1c6fb08de44994f134079f4e4d07ccbb7f6))
* generate types using CEM ([1c481bc](https://github.com/warp-ds/elements/commit/1c481bc1608fefcffcb6d91ab30d73cb3276b72b))
* handle both event types coming from t-textfield ([4c21cd0](https://github.com/warp-ds/elements/commit/4c21cd056d2ba70c69250eb28a37045cfefc33bd))
* icon alignments and button full-width ([#373](https://github.com/warp-ds/elements/issues/373)) ([1028d3f](https://github.com/warp-ds/elements/commit/1028d3f07392eb2cccb0c28a22f5652ba51e1838))
* import ✓ vs module x ([968f8c4](https://github.com/warp-ds/elements/commit/968f8c4e8aa05c39a6af91afbc77c1b5c0eb15cd))
* improve bundle size by using rollup with minification ([4a6f65c](https://github.com/warp-ds/elements/commit/4a6f65c6e16c6a642a8df01fcba2c6d2180c9c50))
* lint error ([19681e7](https://github.com/warp-ds/elements/commit/19681e73add55cd442de4201715096b539e75397))
* make the close button for images stand out a bit more ([8cb0718](https://github.com/warp-ds/elements/commit/8cb0718fa5b7666b6b4c2e4280e9dbfad454cb55))
* remove components.css from storybook ([#371](https://github.com/warp-ds/elements/issues/371)) ([95d4e89](https://github.com/warp-ds/elements/commit/95d4e89fcd5d505f9289bd53f9a0ad6ee0f37dbd))
* remove elements core from elements library ([a4f0252](https://github.com/warp-ds/elements/commit/a4f02528c0d4310ae9aa99aefebef11166283d7d))
* replace ref to avoid hydration errors and change willupdate lifecycle hook for SSR ([#215](https://github.com/warp-ds/elements/issues/215)) ([81197d0](https://github.com/warp-ds/elements/commit/81197d0a3b1594163df0c241791bd7c39bd54fa5))
* restrict components to release to just existing ([#408](https://github.com/warp-ds/elements/issues/408)) ([cd7154c](https://github.com/warp-ds/elements/commit/cd7154c5e58e7d21bc8c1da18c1f06047877ed21))
* rework radio and checkbox ([#363](https://github.com/warp-ds/elements/issues/363)) ([d145edd](https://github.com/warp-ds/elements/commit/d145edd11ab8ce4ba88893c627a7bdb5d15cd0b5))
* set correct expandable paddings and background colours ([#387](https://github.com/warp-ds/elements/issues/387)) ([464978c](https://github.com/warp-ds/elements/commit/464978c299e87c30c19ebd61fe4b095f456bb889))
* steps horizontal bug fixed ([#403](https://github.com/warp-ds/elements/issues/403)) ([62ba3c7](https://github.com/warp-ds/elements/commit/62ba3c716f9ad915c30da98d86e5192643cd9b01))
* update pagination styles ([8a356b8](https://github.com/warp-ds/elements/commit/8a356b864c982e06c7800e099c2348aa50c047aa))
* use correct JSX declarations ([6380d19](https://github.com/warp-ds/elements/commit/6380d19a28f9773e9a3ce7f64b48fe90f385e108))
* use w-button in stead of button ([111ca76](https://github.com/warp-ds/elements/commit/111ca763a0348a420ba95d8a01a9129c8702675e))
* use w-button in stead of button in toast ([b490535](https://github.com/warp-ds/elements/commit/b490535300f780c5f41f44399b4124bd89f1a9a5))
* use w-button in stead of button pill in modal ([c9bd076](https://github.com/warp-ds/elements/commit/c9bd076f0c79cab0f589dd607d6e2912b3dede41))
* visual overlap of range slider thumbs ([#404](https://github.com/warp-ds/elements/issues/404)) ([06f33ab](https://github.com/warp-ds/elements/commit/06f33abc519acd5c3e504bdc80550362b6223368))


### Features

* add slider and range slider implementations ([#329](https://github.com/warp-ds/elements/issues/329)) ([12b8ca7](https://github.com/warp-ds/elements/commit/12b8ca70e6947491a858125f33d37d3f79598db4))
* dispatch event containing page number on page number click ([e5458aa](https://github.com/warp-ds/elements/commit/e5458aa40ba41e3ae0ec5a433efd121778c04ddf))
* remove broadcast component and related files ([#213](https://github.com/warp-ds/elements/issues/213)) ([f555f50](https://github.com/warp-ds/elements/commit/f555f50df67aeff94381b1b28430d4b0d8117a4a))
* support placeholder in select ([#383](https://github.com/warp-ds/elements/issues/383)) ([3fd55f8](https://github.com/warp-ds/elements/commit/3fd55f857a544fbdcb457f7e7ce4819c27880217))

# [2.2.0-next.32](https://github.com/warp-ds/elements/compare/v2.2.0-next.31...v2.2.0-next.32) (2025-11-06)


### Bug Fixes

* ensure bundle exports match previous bundle exports ([#413](https://github.com/warp-ds/elements/issues/413)) ([d5fce40](https://github.com/warp-ds/elements/commit/d5fce402c5afc62fb874b40e02a40e1ffc2f4b58))

# [2.2.0-next.31](https://github.com/warp-ds/elements/compare/v2.2.0-next.30...v2.2.0-next.31) (2025-11-06)


### Bug Fixes

* add backwards compatible builds for packages ([#411](https://github.com/warp-ds/elements/issues/411)) ([68b2ebf](https://github.com/warp-ds/elements/commit/68b2ebf72de84508aef83ca17f6d23e3e83a3a39))

# [2.2.0-next.30](https://github.com/warp-ds/elements/compare/v2.2.0-next.29...v2.2.0-next.30) (2025-11-05)


### Bug Fixes

* restrict components to release to just existing ([#408](https://github.com/warp-ds/elements/issues/408)) ([cd7154c](https://github.com/warp-ds/elements/commit/cd7154c5e58e7d21bc8c1da18c1f06047877ed21))

# [2.2.0-next.29](https://github.com/warp-ds/elements/compare/v2.2.0-next.28...v2.2.0-next.29) (2025-11-05)


### Bug Fixes

* use w-button in stead of button ([111ca76](https://github.com/warp-ds/elements/commit/111ca763a0348a420ba95d8a01a9129c8702675e))
* use w-button in stead of button in toast ([b490535](https://github.com/warp-ds/elements/commit/b490535300f780c5f41f44399b4124bd89f1a9a5))
* use w-button in stead of button pill in modal ([c9bd076](https://github.com/warp-ds/elements/commit/c9bd076f0c79cab0f589dd607d6e2912b3dede41))

# [2.2.0-next.28](https://github.com/warp-ds/elements/compare/v2.2.0-next.27...v2.2.0-next.28) (2025-11-03)


### Bug Fixes

* visual overlap of range slider thumbs ([#404](https://github.com/warp-ds/elements/issues/404)) ([06f33ab](https://github.com/warp-ds/elements/commit/06f33abc519acd5c3e504bdc80550362b6223368))

# [2.2.0-next.27](https://github.com/warp-ds/elements/compare/v2.2.0-next.26...v2.2.0-next.27) (2025-10-31)


### Bug Fixes

* steps horizontal bug fixed ([#403](https://github.com/warp-ds/elements/issues/403)) ([62ba3c7](https://github.com/warp-ds/elements/commit/62ba3c716f9ad915c30da98d86e5192643cd9b01))

# [2.2.0-next.26](https://github.com/warp-ds/elements/compare/v2.2.0-next.25...v2.2.0-next.26) (2025-10-30)


### Bug Fixes

* make the close button for images stand out a bit more ([8cb0718](https://github.com/warp-ds/elements/commit/8cb0718fa5b7666b6b4c2e4280e9dbfad454cb55))

# [2.2.0-next.25](https://github.com/warp-ds/elements/compare/v2.2.0-next.24...v2.2.0-next.25) (2025-10-30)


### Bug Fixes

* set correct expandable paddings and background colours ([#387](https://github.com/warp-ds/elements/issues/387)) ([464978c](https://github.com/warp-ds/elements/commit/464978c299e87c30c19ebd61fe4b095f456bb889))


### Features

* support placeholder in select ([#383](https://github.com/warp-ds/elements/issues/383)) ([3fd55f8](https://github.com/warp-ds/elements/commit/3fd55f857a544fbdcb457f7e7ce4819c27880217))

# [2.2.0-next.24](https://github.com/warp-ds/elements/compare/v2.2.0-next.23...v2.2.0-next.24) (2025-10-30)


### Bug Fixes

* icon alignments and button full-width ([#373](https://github.com/warp-ds/elements/issues/373)) ([1028d3f](https://github.com/warp-ds/elements/commit/1028d3f07392eb2cccb0c28a22f5652ba51e1838))

# [2.2.0-next.23](https://github.com/warp-ds/elements/compare/v2.2.0-next.22...v2.2.0-next.23) (2025-10-28)


### Bug Fixes

* rework radio and checkbox ([#363](https://github.com/warp-ds/elements/issues/363)) ([d145edd](https://github.com/warp-ds/elements/commit/d145edd11ab8ce4ba88893c627a7bdb5d15cd0b5))

# [2.2.0-next.22](https://github.com/warp-ds/elements/compare/v2.2.0-next.21...v2.2.0-next.22) (2025-10-27)


### Bug Fixes

* remove components.css from storybook ([#371](https://github.com/warp-ds/elements/issues/371)) ([95d4e89](https://github.com/warp-ds/elements/commit/95d4e89fcd5d505f9289bd53f9a0ad6ee0f37dbd))

# [2.2.0-next.21](https://github.com/warp-ds/elements/compare/v2.2.0-next.20...v2.2.0-next.21) (2025-10-23)


### Bug Fixes

* decouple react wrappers ([#359](https://github.com/warp-ds/elements/issues/359)) ([a81ca55](https://github.com/warp-ds/elements/commit/a81ca5507d75190877e967e014bd67c3ffa07374))

# [2.2.0-next.20](https://github.com/warp-ds/elements/compare/v2.2.0-next.19...v2.2.0-next.20) (2025-10-16)


### Bug Fixes

* box missing last-child slotted selector and button-as-link ([#348](https://github.com/warp-ds/elements/issues/348)) ([4367c1c](https://github.com/warp-ds/elements/commit/4367c1cf05deefa247818a200a60f4465c7e8241))

# [2.2.0-next.19](https://github.com/warp-ds/elements/compare/v2.2.0-next.18...v2.2.0-next.19) (2025-10-09)


### Bug Fixes

* generate types using CEM ([1c481bc](https://github.com/warp-ds/elements/commit/1c481bc1608fefcffcb6d91ab30d73cb3276b72b))

# [2.2.0-next.18](https://github.com/warp-ds/elements/compare/v2.2.0-next.17...v2.2.0-next.18) (2025-10-09)


### Bug Fixes

* update pagination styles ([8a356b8](https://github.com/warp-ds/elements/commit/8a356b864c982e06c7800e099c2348aa50c047aa))

# [2.2.0-next.17](https://github.com/warp-ds/elements/compare/v2.2.0-next.16...v2.2.0-next.17) (2025-10-09)


### Bug Fixes

* center icons and buttons, and don't trigger click on icons ([#347](https://github.com/warp-ds/elements/issues/347)) ([c25a0de](https://github.com/warp-ds/elements/commit/c25a0deebf9d76d6d11851463442fcca7a26f79a))

# [2.2.0-next.16](https://github.com/warp-ds/elements/compare/v2.2.0-next.15...v2.2.0-next.16) (2025-10-03)


### Bug Fixes

* add types build command ([2499704](https://github.com/warp-ds/elements/commit/2499704e436e1aa90bc2f044cab188584cc864b0))
* use correct JSX declarations ([6380d19](https://github.com/warp-ds/elements/commit/6380d19a28f9773e9a3ce7f64b48fe90f385e108))

# [2.2.0-next.15](https://github.com/warp-ds/elements/compare/v2.2.0-next.14...v2.2.0-next.15) (2025-10-02)


### Bug Fixes

* don't update slider position when emptying textfield ([0384af1](https://github.com/warp-ds/elements/commit/0384af1d1bf42040cc8ea29d83501f12b91ef097))
* handle both event types coming from t-textfield ([4c21cd0](https://github.com/warp-ds/elements/commit/4c21cd056d2ba70c69250eb28a37045cfefc33bd)), closes [#341](https://github.com/warp-ds/elements/issues/341)

# [2.2.0-next.14](https://github.com/warp-ds/elements/compare/v2.2.0-next.13...v2.2.0-next.14) (2025-10-02)


### Features

* add slider and range slider implementations ([#329](https://github.com/warp-ds/elements/issues/329)) ([12b8ca7](https://github.com/warp-ds/elements/commit/12b8ca70e6947491a858125f33d37d3f79598db4))

# [2.2.0-next.13](https://github.com/warp-ds/elements/compare/v2.2.0-next.12...v2.2.0-next.13) (2025-10-01)


### Bug Fixes

* add missing utility dependencies ([9b8c35f](https://github.com/warp-ds/elements/commit/9b8c35f2dd2e95ecff4027bc71c9436461dbd3eb))

# [2.2.0-next.12](https://github.com/warp-ds/elements/compare/v2.2.0-next.11...v2.2.0-next.12) (2025-10-01)


### Bug Fixes

* ensure w-step is loaded before setContext is used ([b653a55](https://github.com/warp-ds/elements/commit/b653a55bd4fab852d6cfaabcef5e046f3cc0f963))

# [2.2.0-next.11](https://github.com/warp-ds/elements/compare/v2.2.0-next.10...v2.2.0-next.11) (2025-09-30)


### Bug Fixes

* improve bundle size by using rollup with minification ([4a6f65c](https://github.com/warp-ds/elements/commit/4a6f65c6e16c6a642a8df01fcba2c6d2180c9c50))
* remove elements core from elements library ([a4f0252](https://github.com/warp-ds/elements/commit/a4f02528c0d4310ae9aa99aefebef11166283d7d))

# [2.2.0-next.10](https://github.com/warp-ds/elements/compare/v2.2.0-next.9...v2.2.0-next.10) (2025-09-25)


### Bug Fixes

* add build css for cloaking ([d175130](https://github.com/warp-ds/elements/commit/d17513044445642edfa7c8f58c06bfa8db368742))

# [2.2.0-next.9](https://github.com/warp-ds/elements/compare/v2.2.0-next.8...v2.2.0-next.9) (2025-09-24)


### Bug Fixes

* fix lint error ([fa6bd1c](https://github.com/warp-ds/elements/commit/fa6bd1c6fb08de44994f134079f4e4d07ccbb7f6))
* lint error ([19681e7](https://github.com/warp-ds/elements/commit/19681e73add55cd442de4201715096b539e75397))

# [2.2.0-next.8](https://github.com/warp-ds/elements/compare/v2.2.0-next.7...v2.2.0-next.8) (2025-09-19)


### Bug Fixes

* adding link component ([b5a737d](https://github.com/warp-ds/elements/commit/b5a737d344237cfe7eb5785fb7fe0e9ac3dc01c3))

# [2.2.0-next.7](https://github.com/warp-ds/elements/compare/v2.2.0-next.6...v2.2.0-next.7) (2025-09-12)


### Bug Fixes

* import ✓ vs module x ([968f8c4](https://github.com/warp-ds/elements/commit/968f8c4e8aa05c39a6af91afbc77c1b5c0eb15cd))

# [2.2.0-next.6](https://github.com/warp-ds/elements/compare/v2.2.0-next.5...v2.2.0-next.6) (2025-09-11)


### Features

* dispatch event containing page number on page number click ([e5458aa](https://github.com/warp-ds/elements/commit/e5458aa40ba41e3ae0ec5a433efd121778c04ddf))

# [2.2.0-next.5](https://github.com/warp-ds/elements/compare/v2.2.0-next.4...v2.2.0-next.5) (2025-09-11)


### Bug Fixes

* cut release to test change of exports and setup ([9b17365](https://github.com/warp-ds/elements/commit/9b17365d45c2f360c033dd255d42dd4254d480eb))

# [2.2.0-next.4](https://github.com/warp-ds/elements/compare/v2.2.0-next.3...v2.2.0-next.4) (2025-09-02)


### Bug Fixes

* adding setup test script for tests ([b02f5b4](https://github.com/warp-ds/elements/commit/b02f5b4143590c888619dcd4ed9b15f01d68bbfa))

# [2.2.0-next.3](https://github.com/warp-ds/elements/compare/v2.2.0-next.2...v2.2.0-next.3) (2025-09-01)


### Bug Fixes

* add form association to select ([eaebfd0](https://github.com/warp-ds/elements/commit/eaebfd0936ddb34eed6f9ebff4b11987d370a9e9))
* add form participation to w-button ([5870570](https://github.com/warp-ds/elements/commit/58705705ee215b527e1830da61c9eee74c09e9eb))
* add form participation to w-textfield ([ac13366](https://github.com/warp-ds/elements/commit/ac13366ebfb72713e7acd131be2ecc6d17003f4d))

# [2.2.0-next.2](https://github.com/warp-ds/elements/compare/v2.2.0-next.1...v2.2.0-next.2) (2025-07-29)


### Bug Fixes

* replace ref to avoid hydration errors and change willupdate lifecycle hook for SSR ([#215](https://github.com/warp-ds/elements/issues/215)) ([81197d0](https://github.com/warp-ds/elements/commit/81197d0a3b1594163df0c241791bd7c39bd54fa5))

# [2.2.0-next.1](https://github.com/warp-ds/elements/compare/v2.1.1...v2.2.0-next.1) (2025-05-07)


### Features

* remove broadcast component and related files ([#213](https://github.com/warp-ds/elements/issues/213)) ([f555f50](https://github.com/warp-ds/elements/commit/f555f50df67aeff94381b1b28430d4b0d8117a4a))

## [2.1.1](https://github.com/warp-ds/elements/compare/v2.1.0...v2.1.1) (2025-02-13)


### Bug Fixes

* update dependencies and build process for improved compatibility ([#206](https://github.com/warp-ds/elements/issues/206)) ([e855400](https://github.com/warp-ds/elements/commit/e8554006e9e8998820990b3862e23414027dbe88))
* upgrade peer dependencies ([542c510](https://github.com/warp-ds/elements/commit/542c510f608f9e181d89ea32964ad3dfd1e5162c))
* upgrade some dependencies ([228c983](https://github.com/warp-ds/elements/commit/228c983793005cc555e9840f884c80571b69dbfd))

## [2.1.1-next.2](https://github.com/warp-ds/elements/compare/v2.1.1-next.1...v2.1.1-next.2) (2025-02-13)


### Bug Fixes

* upgrade peer dependencies ([542c510](https://github.com/warp-ds/elements/commit/542c510f608f9e181d89ea32964ad3dfd1e5162c))
* upgrade some dependencies ([228c983](https://github.com/warp-ds/elements/commit/228c983793005cc555e9840f884c80571b69dbfd))

## [2.1.1-next.1](https://github.com/warp-ds/elements/compare/v2.1.0...v2.1.1-next.1) (2025-01-28)


### Bug Fixes

* update dependencies and build process for improved compatibility ([#206](https://github.com/warp-ds/elements/issues/206)) ([e855400](https://github.com/warp-ds/elements/commit/e8554006e9e8998820990b3862e23414027dbe88))

# [2.1.0](https://github.com/warp-ds/elements/compare/v2.0.2...v2.1.0) (2025-01-22)


### Bug Fixes

* Add select element change event ([#190](https://github.com/warp-ds/elements/issues/190)) ([149c057](https://github.com/warp-ds/elements/commit/149c0572f85d55912bcac9e3d4ec3bf79ed62db1))
* Add select element change event ([#190](https://github.com/warp-ds/elements/issues/190)) ([4ebb243](https://github.com/warp-ds/elements/commit/4ebb243bfd3453999dafb20328f7887bedf0e464))
* **attention:** bump to latest version of @warp-ds/core dependency ([#187](https://github.com/warp-ds/elements/issues/187)) ([2458f49](https://github.com/warp-ds/elements/commit/2458f4948fe325d57c3cd90b619c80a61b46f28f))
* **attention:** bump to latest version of @warp-ds/core dependency ([#187](https://github.com/warp-ds/elements/issues/187)) ([886f9ef](https://github.com/warp-ds/elements/commit/886f9ef3ce4f49b542f3c38fd3794971787ea6ee))
* **attention:** move role and aria-label to attention-arrow wrapper ([#191](https://github.com/warp-ds/elements/issues/191)) ([2b609be](https://github.com/warp-ds/elements/commit/2b609be45d275b6f92d1c90548c00cb972b1be8c))
* **attention:** move role and aria-label to attention-arrow wrapper ([#191](https://github.com/warp-ds/elements/issues/191)) ([f2512a5](https://github.com/warp-ds/elements/commit/f2512a550bd88e88687bdafcdd2eda05b749895f))
* **attention:** update to latest version of @warp-ds/core dependency ([#194](https://github.com/warp-ds/elements/issues/194)) ([b65c724](https://github.com/warp-ds/elements/commit/b65c72466583f861e8445a4df400ca9dce0b32ed))
* **attention:** update to latest version of @warp-ds/core dependency ([#194](https://github.com/warp-ds/elements/issues/194)) ([7127ce8](https://github.com/warp-ds/elements/commit/7127ce8b52eaa5a46dfdf54a180ecf58dd11e7c1))
* export badge and pill in package.json ([53c2971](https://github.com/warp-ds/elements/commit/53c29713f74c12ef0a5dc07adecfb1e2cb025cb4))
* export badge and pill in package.json ([c94216e](https://github.com/warp-ds/elements/commit/c94216e4964f706c65a731fb99e2d1ca8b9584fc))
* Improve attention component styling ([#193](https://github.com/warp-ds/elements/issues/193)) ([0109e73](https://github.com/warp-ds/elements/commit/0109e7335ff5cff06c504b59532e0279202a257a))
* Improve attention component styling ([#193](https://github.com/warp-ds/elements/issues/193)) ([bee1548](https://github.com/warp-ds/elements/commit/bee1548bd8d12918b877450ed1838cef0efd7988))
* merge in change that was made to main branch in error ([#203](https://github.com/warp-ds/elements/issues/203)) ([7b2acc6](https://github.com/warp-ds/elements/commit/7b2acc60bed47262146a9d7c283211c05e4ecb2f)), closes [#201](https://github.com/warp-ds/elements/issues/201) [#201](https://github.com/warp-ds/elements/issues/201) [#187](https://github.com/warp-ds/elements/issues/187) [#187](https://github.com/warp-ds/elements/issues/187) [#191](https://github.com/warp-ds/elements/issues/191) [#191](https://github.com/warp-ds/elements/issues/191) [#190](https://github.com/warp-ds/elements/issues/190) [#190](https://github.com/warp-ds/elements/issues/190) [#194](https://github.com/warp-ds/elements/issues/194) [#194](https://github.com/warp-ds/elements/issues/194) [#195](https://github.com/warp-ds/elements/issues/195) [#193](https://github.com/warp-ds/elements/issues/193) [#193](https://github.com/warp-ds/elements/issues/193) [#197](https://github.com/warp-ds/elements/issues/197) [#197](https://github.com/warp-ds/elements/issues/197) [#200](https://github.com/warp-ds/elements/issues/200)


### Features

* **lingui:** add support for Swedish ('sv') translations ([#197](https://github.com/warp-ds/elements/issues/197)) ([6d1a3d5](https://github.com/warp-ds/elements/commit/6d1a3d5aa52d8c69e7b5e6e7aa5fe6ba4824b2cf))
* **lingui:** add support for Swedish ('sv') translations ([#197](https://github.com/warp-ds/elements/issues/197)) ([8c68f1c](https://github.com/warp-ds/elements/commit/8c68f1caae272bc3e03b41f2e0700d42706d3c29))

# [2.1.0-next.2](https://github.com/warp-ds/elements/compare/v2.1.0-next.1...v2.1.0-next.2) (2025-01-22)


### Bug Fixes

* Add select element change event ([#190](https://github.com/warp-ds/elements/issues/190)) ([149c057](https://github.com/warp-ds/elements/commit/149c0572f85d55912bcac9e3d4ec3bf79ed62db1))
* **attention:** bump to latest version of @warp-ds/core dependency ([#187](https://github.com/warp-ds/elements/issues/187)) ([2458f49](https://github.com/warp-ds/elements/commit/2458f4948fe325d57c3cd90b619c80a61b46f28f))
* **attention:** move role and aria-label to attention-arrow wrapper ([#191](https://github.com/warp-ds/elements/issues/191)) ([2b609be](https://github.com/warp-ds/elements/commit/2b609be45d275b6f92d1c90548c00cb972b1be8c))
* **attention:** update to latest version of @warp-ds/core dependency ([#194](https://github.com/warp-ds/elements/issues/194)) ([b65c724](https://github.com/warp-ds/elements/commit/b65c72466583f861e8445a4df400ca9dce0b32ed))
* ease strictness of warp-ds/css peer dependency ([#201](https://github.com/warp-ds/elements/issues/201)) ([f973f16](https://github.com/warp-ds/elements/commit/f973f1675326883999581c07965ead38fb9d0081))
* export badge and pill in package.json ([53c2971](https://github.com/warp-ds/elements/commit/53c29713f74c12ef0a5dc07adecfb1e2cb025cb4))
* Improve attention component styling ([#193](https://github.com/warp-ds/elements/issues/193)) ([0109e73](https://github.com/warp-ds/elements/commit/0109e7335ff5cff06c504b59532e0279202a257a))
* merge in change that was made to main branch in error ([#203](https://github.com/warp-ds/elements/issues/203)) ([7b2acc6](https://github.com/warp-ds/elements/commit/7b2acc60bed47262146a9d7c283211c05e4ecb2f)), closes [#201](https://github.com/warp-ds/elements/issues/201) [#201](https://github.com/warp-ds/elements/issues/201) [#187](https://github.com/warp-ds/elements/issues/187) [#187](https://github.com/warp-ds/elements/issues/187) [#191](https://github.com/warp-ds/elements/issues/191) [#191](https://github.com/warp-ds/elements/issues/191) [#190](https://github.com/warp-ds/elements/issues/190) [#190](https://github.com/warp-ds/elements/issues/190) [#194](https://github.com/warp-ds/elements/issues/194) [#194](https://github.com/warp-ds/elements/issues/194) [#195](https://github.com/warp-ds/elements/issues/195) [#193](https://github.com/warp-ds/elements/issues/193) [#193](https://github.com/warp-ds/elements/issues/193) [#197](https://github.com/warp-ds/elements/issues/197) [#197](https://github.com/warp-ds/elements/issues/197) [#200](https://github.com/warp-ds/elements/issues/200)


### Features

* **lingui:** add support for Swedish ('sv') translations ([#197](https://github.com/warp-ds/elements/issues/197)) ([6d1a3d5](https://github.com/warp-ds/elements/commit/6d1a3d5aa52d8c69e7b5e6e7aa5fe6ba4824b2cf))

## [2.1.0-next.1](https://github.com/warp-ds/elements/compare/v2.0.2-next.6...v2.1.0-next.1) (2024-12-02)

## [2.0.2](https://github.com/warp-ds/elements/compare/v2.0.1...v2.0.2) (2024-12-17)

### Features

* **lingui:** add support for Swedish ('sv') translations ([#197](https://github.com/warp-ds/elements/issues/197)) ([8c68f1c](https://github.com/warp-ds/elements/commit/8c68f1caae272bc3e03b41f2e0700d42706d3c29))

## [2.0.2-next.6](https://github.com/warp-ds/elements/compare/v2.0.2-next.5...v2.0.2-next.6) (2024-11-28)


### Bug Fixes

* Improve attention component styling ([#193](https://github.com/warp-ds/elements/issues/193)) ([bee1548](https://github.com/warp-ds/elements/commit/bee1548bd8d12918b877450ed1838cef0efd7988))

## [2.0.2-next.5](https://github.com/warp-ds/elements/compare/v2.0.2-next.4...v2.0.2-next.5) (2024-11-26)


### Bug Fixes

* **attention:** update to latest version of @warp-ds/core dependency ([#194](https://github.com/warp-ds/elements/issues/194)) ([7127ce8](https://github.com/warp-ds/elements/commit/7127ce8b52eaa5a46dfdf54a180ecf58dd11e7c1))

## [2.0.2-next.4](https://github.com/warp-ds/elements/compare/v2.0.2-next.3...v2.0.2-next.4) (2024-11-22)


### Bug Fixes

* Add select element change event ([#190](https://github.com/warp-ds/elements/issues/190)) ([4ebb243](https://github.com/warp-ds/elements/commit/4ebb243bfd3453999dafb20328f7887bedf0e464))

## [2.0.2-next.3](https://github.com/warp-ds/elements/compare/v2.0.2-next.2...v2.0.2-next.3) (2024-11-20)


### Bug Fixes

* **attention:** move role and aria-label to attention-arrow wrapper ([#191](https://github.com/warp-ds/elements/issues/191)) ([f2512a5](https://github.com/warp-ds/elements/commit/f2512a550bd88e88687bdafcdd2eda05b749895f))

## [2.0.2-next.2](https://github.com/warp-ds/elements/compare/v2.0.2-next.1...v2.0.2-next.2) (2024-11-14)


### Bug Fixes

* export badge and pill in package.json ([c94216e](https://github.com/warp-ds/elements/commit/c94216e4964f706c65a731fb99e2d1ca8b9584fc))

## [2.0.2-next.1](https://github.com/warp-ds/elements/compare/v2.0.1...v2.0.2-next.1) (2024-10-21)


### Bug Fixes

* ease strictness of warp-ds/css peer dependency ([#201](https://github.com/warp-ds/elements/issues/201)) ([f973f16](https://github.com/warp-ds/elements/commit/f973f1675326883999581c07965ead38fb9d0081))
* **attention:** bump to latest version of @warp-ds/core dependency ([#187](https://github.com/warp-ds/elements/issues/187)) ([886f9ef](https://github.com/warp-ds/elements/commit/886f9ef3ce4f49b542f3c38fd3794971787ea6ee))

## [2.0.1](https://github.com/warp-ds/elements/compare/v2.0.0...v2.0.1) (2024-08-20)


### Bug Fixes

* **badge:** remove deprecated 'notification' example ([#183](https://github.com/warp-ds/elements/issues/183)) ([880c712](https://github.com/warp-ds/elements/commit/880c712c69179d18f0ee1ad007774e16fca8cebd))
* **modal:** add aria labels to back an close buttons ([#180](https://github.com/warp-ds/elements/issues/180)) ([e1b0f41](https://github.com/warp-ds/elements/commit/e1b0f410e877506c9e0fd10049ea93111d23e903))

## [2.0.1-next.2](https://github.com/warp-ds/elements/compare/v2.0.1-next.1...v2.0.1-next.2) (2024-08-15)


### Bug Fixes

* **badge:** remove deprecated 'notification' example ([#183](https://github.com/warp-ds/elements/issues/183)) ([880c712](https://github.com/warp-ds/elements/commit/880c712c69179d18f0ee1ad007774e16fca8cebd))

## [2.0.1-next.1](https://github.com/warp-ds/elements/compare/v2.0.0...v2.0.1-next.1) (2024-08-15)


### Bug Fixes

* **modal:** add aria labels to back an close buttons ([#180](https://github.com/warp-ds/elements/issues/180)) ([e1b0f41](https://github.com/warp-ds/elements/commit/e1b0f410e877506c9e0fd10049ea93111d23e903))

# [2.0.0](https://github.com/warp-ds/elements/compare/v1.5.0...v2.0.0) (2024-08-14)


### Bug Fixes

* **cc:** no classes styling the same CSS properties are set on one element ([#177](https://github.com/warp-ds/elements/issues/177)) ([789b821](https://github.com/warp-ds/elements/commit/789b821a775c227b6f7d83726d8aad362c24dc8b))
* **select:** autofocus to work in safari and firefox ([#176](https://github.com/warp-ds/elements/issues/176)) ([7a314e9](https://github.com/warp-ds/elements/commit/7a314e91a71980243036a953cb0dce109d83f15a))
* support danish locale ([#167](https://github.com/warp-ds/elements/issues/167)) ([418c68f](https://github.com/warp-ds/elements/commit/418c68fc20f1ec2720cc70168afb5311ad65a0e5))
* update dependencies ([#168](https://github.com/warp-ds/elements/issues/168)) ([a71ff2f](https://github.com/warp-ds/elements/commit/a71ff2f1f9feb28923e1d98529a6654dcfe9929c))


### Features

* release for DBA ([#164](https://github.com/warp-ds/elements/issues/164)) ([36c9f47](https://github.com/warp-ds/elements/commit/36c9f47058f9c4f3d0f5e68ef63c8ff21c39da54))


### BREAKING CHANGES

* **cc:** Expandable info prop has been removed
* This removes depreacted stuff

* update some more stuff

* update to v2

* more v2

# [2.0.0-next.5](https://github.com/warp-ds/elements/compare/v2.0.0-next.4...v2.0.0-next.5) (2024-08-14)


### Bug Fixes

* **select:** autofocus to work in safari and firefox ([#176](https://github.com/warp-ds/elements/issues/176)) ([7a314e9](https://github.com/warp-ds/elements/commit/7a314e91a71980243036a953cb0dce109d83f15a))

# [2.0.0-next.4](https://github.com/warp-ds/elements/compare/v2.0.0-next.3...v2.0.0-next.4) (2024-08-13)


### Bug Fixes

* **cc:** no classes styling the same CSS properties are set on one element ([#177](https://github.com/warp-ds/elements/issues/177)) ([789b821](https://github.com/warp-ds/elements/commit/789b821a775c227b6f7d83726d8aad362c24dc8b))


### BREAKING CHANGES

* **cc:** Expandable info prop has been removed

# [2.0.0-next.3](https://github.com/warp-ds/elements/compare/v2.0.0-next.2...v2.0.0-next.3) (2024-07-11)


### Bug Fixes

* update dependencies ([#168](https://github.com/warp-ds/elements/issues/168)) ([a71ff2f](https://github.com/warp-ds/elements/commit/a71ff2f1f9feb28923e1d98529a6654dcfe9929c))

# [2.0.0-next.2](https://github.com/warp-ds/elements/compare/v2.0.0-next.1...v2.0.0-next.2) (2024-07-04)


### Bug Fixes

* support danish locale ([#167](https://github.com/warp-ds/elements/issues/167)) ([418c68f](https://github.com/warp-ds/elements/commit/418c68fc20f1ec2720cc70168afb5311ad65a0e5))

# [2.0.0-next.1](https://github.com/warp-ds/elements/compare/v1.5.0...v2.0.0-next.1) (2024-07-04)


### Features

* release for DBA ([#164](https://github.com/warp-ds/elements/issues/164)) ([36c9f47](https://github.com/warp-ds/elements/commit/36c9f47058f9c4f3d0f5e68ef63c8ff21c39da54))


### BREAKING CHANGES

* This removes depreacted stuff

* update some more stuff

* update to v2

* more v2

# [1.5.0](https://github.com/warp-ds/elements/compare/v1.4.0...v1.5.0) (2024-07-02)


### Bug Fixes

* add a mr-8 to calloutTarget div ([#157](https://github.com/warp-ds/elements/issues/157)) ([66ef95e](https://github.com/warp-ds/elements/commit/66ef95e163d988b31f475773673df556f684a998))
* update release.yml to include a retry for semantic-release and only if succesful will it publish to eik ([#160](https://github.com/warp-ds/elements/issues/160)) ([31a8b4e](https://github.com/warp-ds/elements/commit/31a8b4ea057c2e43afc1e2e7a69fb19bb33d015c))
* update warp-ds eslint-config devDep and add .eslintrc-file ([#153](https://github.com/warp-ds/elements/issues/153)) ([679fab7](https://github.com/warp-ds/elements/commit/679fab7a1a89a59fa9434932e06d9e2026f46982))


### Features

* add Modal component ([#127](https://github.com/warp-ds/elements/issues/127)) ([30aecaf](https://github.com/warp-ds/elements/commit/30aecaf8301f8dcb7d2130c12e0dff308aeac84a))

# [1.5.0-next.2](https://github.com/warp-ds/elements/compare/v1.5.0-next.1...v1.5.0-next.2) (2024-06-25)


### Bug Fixes

* update release.yml to include a retry for semantic-release and only if succesful will it publish to eik ([#160](https://github.com/warp-ds/elements/issues/160)) ([31a8b4e](https://github.com/warp-ds/elements/commit/31a8b4ea057c2e43afc1e2e7a69fb19bb33d015c))

# [1.5.0-next.1](https://github.com/warp-ds/elements/compare/v1.4.1-next.2...v1.5.0-next.1) (2024-06-24)


### Features

* add Modal component ([#127](https://github.com/warp-ds/elements/issues/127)) ([30aecaf](https://github.com/warp-ds/elements/commit/30aecaf8301f8dcb7d2130c12e0dff308aeac84a))

## [1.4.1-next.2](https://github.com/warp-ds/elements/compare/v1.4.1-next.1...v1.4.1-next.2) (2024-06-17)


### Bug Fixes

* add a mr-8 to calloutTarget div ([#157](https://github.com/warp-ds/elements/issues/157)) ([66ef95e](https://github.com/warp-ds/elements/commit/66ef95e163d988b31f475773673df556f684a998))

## [1.4.1-next.1](https://github.com/warp-ds/elements/compare/v1.4.0...v1.4.1-next.1) (2024-05-22)


### Bug Fixes

* update warp-ds eslint-config devDep and add .eslintrc-file ([#153](https://github.com/warp-ds/elements/issues/153)) ([679fab7](https://github.com/warp-ds/elements/commit/679fab7a1a89a59fa9434932e06d9e2026f46982))

# [1.4.0](https://github.com/warp-ds/elements/compare/v1.3.3...v1.4.0) (2024-05-15)


### Bug Fixes

* Styling fixes for Card component ([#147](https://github.com/warp-ds/elements/issues/147)) ([53c1249](https://github.com/warp-ds/elements/commit/53c12490ada84eb4e4d30e7707c37ee6f446c1c8))
* **textfield:** clean up classes ([#150](https://github.com/warp-ds/elements/issues/150)) ([da25199](https://github.com/warp-ds/elements/commit/da251996fe38f77fddf6290c675f399b04236f10))


### Features

* Add more features on how attention component is positioned ([#135](https://github.com/warp-ds/elements/issues/135)) ([e15dc54](https://github.com/warp-ds/elements/commit/e15dc545187717476d7418af0ca47f6eb734a488))
* add more functionality to attention component ([#149](https://github.com/warp-ds/elements/issues/149)) ([daaf385](https://github.com/warp-ds/elements/commit/daaf3853a2c71c6dd70148cc4a7d53498dd5b497))

# [1.4.0-next.3](https://github.com/warp-ds/elements/compare/v1.4.0-next.2...v1.4.0-next.3) (2024-05-14)


### Bug Fixes

* **textfield:** clean up classes ([#150](https://github.com/warp-ds/elements/issues/150)) ([da25199](https://github.com/warp-ds/elements/commit/da251996fe38f77fddf6290c675f399b04236f10))

# [1.4.0-next.2](https://github.com/warp-ds/elements/compare/v1.4.0-next.1...v1.4.0-next.2) (2024-04-30)


### Features

* add more functionality to attention component ([#149](https://github.com/warp-ds/elements/issues/149)) ([daaf385](https://github.com/warp-ds/elements/commit/daaf3853a2c71c6dd70148cc4a7d53498dd5b497))

# [1.4.0-next.1](https://github.com/warp-ds/elements/compare/v1.3.4-next.1...v1.4.0-next.1) (2024-04-16)


### Features

* Add more features on how attention component is positioned ([#135](https://github.com/warp-ds/elements/issues/135)) ([e15dc54](https://github.com/warp-ds/elements/commit/e15dc545187717476d7418af0ca47f6eb734a488))

## [1.3.4-next.1](https://github.com/warp-ds/elements/compare/v1.3.3...v1.3.4-next.1) (2024-04-16)


### Bug Fixes

* Styling fixes for Card component ([#147](https://github.com/warp-ds/elements/issues/147)) ([53c1249](https://github.com/warp-ds/elements/commit/53c12490ada84eb4e4d30e7707c37ee6f446c1c8))

## [1.3.3](https://github.com/warp-ds/elements/compare/v1.3.2...v1.3.3) (2024-04-09)


### Bug Fixes

* add warp-ds eslint-config ([#141](https://github.com/warp-ds/elements/issues/141)) ([dd3fec1](https://github.com/warp-ds/elements/commit/dd3fec1b180aa8980274311ac25801a7666dfa43))

## [1.3.3-next.1](https://github.com/warp-ds/elements/compare/v1.3.2...v1.3.3-next.1) (2024-03-21)


### Bug Fixes

* add warp-ds eslint-config ([#141](https://github.com/warp-ds/elements/issues/141)) ([dd3fec1](https://github.com/warp-ds/elements/commit/dd3fec1b180aa8980274311ac25801a7666dfa43))

## [1.3.2](https://github.com/warp-ds/elements/compare/v1.3.1...v1.3.2) (2024-03-21)


### Bug Fixes

* use correct colors in label and error text ([#139](https://github.com/warp-ds/elements/issues/139)) ([c9045fd](https://github.com/warp-ds/elements/commit/c9045fd733aa64395fdb50b52a6329e9ae774c03))

## [1.3.2-next.1](https://github.com/warp-ds/elements/compare/v1.3.1...v1.3.2-next.1) (2024-03-21)


### Bug Fixes

* use correct colors in label and error text ([#139](https://github.com/warp-ds/elements/issues/139)) ([c9045fd](https://github.com/warp-ds/elements/commit/c9045fd733aa64395fdb50b52a6329e9ae774c03))

## [1.3.1](https://github.com/warp-ds/elements/compare/v1.3.0...v1.3.1) (2024-02-20)


### Reverts

* Revert "fix: Remove eik from Elements (#124)" (#133) ([be2644a](https://github.com/warp-ds/elements/commit/be2644a7e5abe71d1bdb09a68ce913fe14fdbbb3)), closes [#124](https://github.com/warp-ds/elements/issues/124) [#133](https://github.com/warp-ds/elements/issues/133)

## [1.3.1-next.1](https://github.com/warp-ds/elements/compare/v1.3.0...v1.3.1-next.1) (2024-02-20)


### Reverts

* Revert "fix: Remove eik from Elements (#124)" (#133) ([be2644a](https://github.com/warp-ds/elements/commit/be2644a7e5abe71d1bdb09a68ce913fe14fdbbb3)), closes [#124](https://github.com/warp-ds/elements/issues/124) [#133](https://github.com/warp-ds/elements/issues/133)

# [1.3.0](https://github.com/warp-ds/elements/compare/v1.2.2...v1.3.0) (2024-02-15)


### Bug Fixes

* add translation for toast aria-label ([#123](https://github.com/warp-ds/elements/issues/123)) ([9458ed4](https://github.com/warp-ds/elements/commit/9458ed4ba67c362a5f9a8e4c5030ffc61079977f))
* Remove eik from Elements ([#124](https://github.com/warp-ds/elements/issues/124)) ([9253ed0](https://github.com/warp-ds/elements/commit/9253ed081d1fbe967db5830dc45b6d0df38f737f))
* rename deleted icons after @warp-ds/icons update to 2.0.0 ([#128](https://github.com/warp-ds/elements/issues/128)) ([236356e](https://github.com/warp-ds/elements/commit/236356e855b148d0f3d0cd16ad24d2f39c0da066))


### Features

* Add pill to elements ([#126](https://github.com/warp-ds/elements/issues/126)) ([df25503](https://github.com/warp-ds/elements/commit/df25503844a61efacb2f13ce8dbdbdc87f0f333f))

# [1.3.0-next.2](https://github.com/warp-ds/elements/compare/v1.3.0-next.1...v1.3.0-next.2) (2024-02-13)


### Bug Fixes

* rename deleted icons after @warp-ds/icons update to 2.0.0 ([#128](https://github.com/warp-ds/elements/issues/128)) ([236356e](https://github.com/warp-ds/elements/commit/236356e855b148d0f3d0cd16ad24d2f39c0da066))

# [1.3.0-next.1](https://github.com/warp-ds/elements/compare/v1.2.3-next.2...v1.3.0-next.1) (2024-02-07)


### Features

* Add pill to elements ([#126](https://github.com/warp-ds/elements/issues/126)) ([df25503](https://github.com/warp-ds/elements/commit/df25503844a61efacb2f13ce8dbdbdc87f0f333f))

## [1.2.3-next.2](https://github.com/warp-ds/elements/compare/v1.2.3-next.1...v1.2.3-next.2) (2024-01-19)


### Bug Fixes

* Remove eik from Elements ([#124](https://github.com/warp-ds/elements/issues/124)) ([9253ed0](https://github.com/warp-ds/elements/commit/9253ed081d1fbe967db5830dc45b6d0df38f737f))

## [1.2.3-next.1](https://github.com/warp-ds/elements/compare/v1.2.2...v1.2.3-next.1) (2024-01-09)


### Bug Fixes

* add translation for toast aria-label ([#123](https://github.com/warp-ds/elements/issues/123)) ([9458ed4](https://github.com/warp-ds/elements/commit/9458ed4ba67c362a5f9a8e4c5030ffc61079977f))

## [1.2.2](https://github.com/warp-ds/elements/compare/v1.2.1...v1.2.2) (2023-12-20)


### Bug Fixes

* **card:** set default background on unselected non-flat card ([#120](https://github.com/warp-ds/elements/issues/120)) ([05b1193](https://github.com/warp-ds/elements/commit/05b11936da806068d11cce74a7e7666a6bdafcdb))

## [1.2.2-next.1](https://github.com/warp-ds/elements/compare/v1.2.1...v1.2.2-next.1) (2023-12-20)


### Bug Fixes

* **card:** set default background on unselected non-flat card ([#120](https://github.com/warp-ds/elements/issues/120)) ([05b1193](https://github.com/warp-ds/elements/commit/05b11936da806068d11cce74a7e7666a6bdafcdb))

## [1.2.1](https://github.com/warp-ds/elements/compare/v1.2.0...v1.2.1) (2023-11-29)


### Bug Fixes

* Add part to the expandable to be able to style an svg inside the shadow-DOM ([#107](https://github.com/warp-ds/elements/issues/107)) ([87faf60](https://github.com/warp-ds/elements/commit/87faf60be3ac5d5460b04add6f5b408844b31bd7))
* eik publishing for elements ([#111](https://github.com/warp-ds/elements/issues/111)) ([0915221](https://github.com/warp-ds/elements/commit/09152215ec3ccf40643403c2d64edb6b9f76ea89))
* **textfield:** allow styling input's left padding when prefix is wider than 40px ([#116](https://github.com/warp-ds/elements/issues/116)) ([ac890c7](https://github.com/warp-ds/elements/commit/ac890c79d877a851fe536436aa598ef5e18308ec))

## [1.2.1-next.3](https://github.com/warp-ds/elements/compare/v1.2.1-next.2...v1.2.1-next.3) (2023-11-28)


### Bug Fixes

* **textfield:** allow styling input's left padding when prefix is wider than 40px ([#116](https://github.com/warp-ds/elements/issues/116)) ([ac890c7](https://github.com/warp-ds/elements/commit/ac890c79d877a851fe536436aa598ef5e18308ec))

## [1.2.1-next.2](https://github.com/warp-ds/elements/compare/v1.2.1-next.1...v1.2.1-next.2) (2023-11-27)


### Bug Fixes

* Add part to the expandable to be able to style an svg inside the shadow-DOM ([#107](https://github.com/warp-ds/elements/issues/107)) ([87faf60](https://github.com/warp-ds/elements/commit/87faf60be3ac5d5460b04add6f5b408844b31bd7))

## [1.2.1-next.1](https://github.com/warp-ds/elements/compare/v1.2.0...v1.2.1-next.1) (2023-11-22)


### Bug Fixes

* eik publishing for elements ([#111](https://github.com/warp-ds/elements/issues/111)) ([0915221](https://github.com/warp-ds/elements/commit/09152215ec3ccf40643403c2d64edb6b9f76ea89))

# [1.2.0](https://github.com/warp-ds/elements/compare/v1.1.1...v1.2.0) (2023-11-07)


### Bug Fixes

* a11y expandable ([#103](https://github.com/warp-ds/elements/issues/103)) ([729bf5f](https://github.com/warp-ds/elements/commit/729bf5f20bf6ace3e05d7b1c943bc468c873f699))
* a11y issues for attention component ([#82](https://github.com/warp-ds/elements/issues/82)) ([8b96498](https://github.com/warp-ds/elements/commit/8b9649846739cc3ab5af879c01515142fb9ef884))
* Add role property to Box component ([#86](https://github.com/warp-ds/elements/issues/86)) ([d31cb8c](https://github.com/warp-ds/elements/commit/d31cb8c7b66af5243c8536ed0eb3db33280ebafc))
* adjust further a11y attention ([#97](https://github.com/warp-ds/elements/issues/97)) ([de51c17](https://github.com/warp-ds/elements/commit/de51c175d920a73743b20df1c4230b358d8ac4cd))
* bring back unocss for our own docs ([#93](https://github.com/warp-ds/elements/issues/93)) ([5cee1a1](https://github.com/warp-ds/elements/commit/5cee1a1e8515f32872021332d9eb36d1a1fe1be3))
* changed css for expandable ([#91](https://github.com/warp-ds/elements/issues/91)) ([25b910c](https://github.com/warp-ds/elements/commit/25b910c55fa2cc7376196e12d4d1299eaa30ea53))


### Features

* **attention:** add highlight variant ([#90](https://github.com/warp-ds/elements/issues/90)) ([595d91b](https://github.com/warp-ds/elements/commit/595d91b41c5941369e1f5495ddabd200affdb40f))
* **attention:** add optional close button and dismiss on esc keypress ([#101](https://github.com/warp-ds/elements/issues/101)) ([9da7a58](https://github.com/warp-ds/elements/commit/9da7a58af199b507655a44a4aa04437e2b797229))
* SSR safe individual elements ([#87](https://github.com/warp-ds/elements/issues/87)) ([6596387](https://github.com/warp-ds/elements/commit/6596387ea2cfcfab4f2f091a50870c0926507d94))

# [1.2.0-next.7](https://github.com/warp-ds/elements/compare/v1.2.0-next.6...v1.2.0-next.7) (2023-11-02)


### Bug Fixes

* a11y expandable ([#103](https://github.com/warp-ds/elements/issues/103)) ([729bf5f](https://github.com/warp-ds/elements/commit/729bf5f20bf6ace3e05d7b1c943bc468c873f699))

# [1.2.0-next.6](https://github.com/warp-ds/elements/compare/v1.2.0-next.5...v1.2.0-next.6) (2023-11-02)


### Features

* **attention:** add optional close button and dismiss on esc keypress ([#101](https://github.com/warp-ds/elements/issues/101)) ([9da7a58](https://github.com/warp-ds/elements/commit/9da7a58af199b507655a44a4aa04437e2b797229))

# [1.2.0-next.5](https://github.com/warp-ds/elements/compare/v1.2.0-next.4...v1.2.0-next.5) (2023-10-31)


### Bug Fixes

* Add role property to Box component ([#86](https://github.com/warp-ds/elements/issues/86)) ([d31cb8c](https://github.com/warp-ds/elements/commit/d31cb8c7b66af5243c8536ed0eb3db33280ebafc))

# [1.2.0-next.4](https://github.com/warp-ds/elements/compare/v1.2.0-next.3...v1.2.0-next.4) (2023-10-30)


### Bug Fixes

* adjust further a11y attention ([#97](https://github.com/warp-ds/elements/issues/97)) ([de51c17](https://github.com/warp-ds/elements/commit/de51c175d920a73743b20df1c4230b358d8ac4cd))

# [1.2.0-next.3](https://github.com/warp-ds/elements/compare/v1.2.0-next.2...v1.2.0-next.3) (2023-10-26)


### Bug Fixes

* bring back unocss for our own docs ([#93](https://github.com/warp-ds/elements/issues/93)) ([5cee1a1](https://github.com/warp-ds/elements/commit/5cee1a1e8515f32872021332d9eb36d1a1fe1be3))

# [1.2.0-next.2](https://github.com/warp-ds/elements/compare/v1.2.0-next.1...v1.2.0-next.2) (2023-10-26)


### Features

* SSR safe individual elements ([#87](https://github.com/warp-ds/elements/issues/87)) ([6596387](https://github.com/warp-ds/elements/commit/6596387ea2cfcfab4f2f091a50870c0926507d94))

# [1.2.0-next.1](https://github.com/warp-ds/elements/compare/v1.1.2-next.2...v1.2.0-next.1) (2023-10-26)


### Features

* **attention:** add highlight variant ([#90](https://github.com/warp-ds/elements/issues/90)) ([595d91b](https://github.com/warp-ds/elements/commit/595d91b41c5941369e1f5495ddabd200affdb40f))

## [1.1.2-next.2](https://github.com/warp-ds/elements/compare/v1.1.2-next.1...v1.1.2-next.2) (2023-10-26)


### Bug Fixes

* changed css for expandable ([#91](https://github.com/warp-ds/elements/issues/91)) ([25b910c](https://github.com/warp-ds/elements/commit/25b910c55fa2cc7376196e12d4d1299eaa30ea53))

## [1.1.2-next.1](https://github.com/warp-ds/elements/compare/v1.1.1...v1.1.2-next.1) (2023-10-24)


### Bug Fixes

* a11y issues for attention component ([#82](https://github.com/warp-ds/elements/issues/82)) ([8b96498](https://github.com/warp-ds/elements/commit/8b9649846739cc3ab5af879c01515142fb9ef884))

## [1.1.1](https://github.com/warp-ds/elements/compare/v1.1.0...v1.1.1) (2023-10-23)


### Bug Fixes

* anchor text alignment & icon translations ([#84](https://github.com/warp-ds/elements/issues/84)) ([83b6c7a](https://github.com/warp-ds/elements/commit/83b6c7a6236ab07a5a9cc86b066e5e2938be6a77))
* **breadcrumbs:** Remove double aria-label ([5e165ae](https://github.com/warp-ds/elements/commit/5e165aecd9214bf0c553351189c928159f1bab10))
* **breadcrumbs:** remove dounble aria label and remove aria hidden from seperators ([4595529](https://github.com/warp-ds/elements/commit/4595529aa8bc375f71f240180235e95c8e75cdf9))
* replace inline svgs with warp icons ([#63](https://github.com/warp-ds/elements/issues/63)) ([f69fb59](https://github.com/warp-ds/elements/commit/f69fb59badda2306b9dbc32c95a96329e24de42c))

## [1.1.1-next.3](https://github.com/warp-ds/elements/compare/v1.1.1-next.2...v1.1.1-next.3) (2023-10-23)


### Bug Fixes

* **breadcrumbs:** Remove double aria-label ([5e165ae](https://github.com/warp-ds/elements/commit/5e165aecd9214bf0c553351189c928159f1bab10))
* **breadcrumbs:** remove dounble aria label and remove aria hidden from seperators ([4595529](https://github.com/warp-ds/elements/commit/4595529aa8bc375f71f240180235e95c8e75cdf9))

## [1.1.1-next.2](https://github.com/warp-ds/elements/compare/v1.1.1-next.1...v1.1.1-next.2) (2023-10-20)


### Bug Fixes

* anchor text alignment & icon translations ([#84](https://github.com/warp-ds/elements/issues/84)) ([83b6c7a](https://github.com/warp-ds/elements/commit/83b6c7a6236ab07a5a9cc86b066e5e2938be6a77))

## [1.1.1-next.1](https://github.com/warp-ds/elements/compare/v1.1.0...v1.1.1-next.1) (2023-10-13)


### Bug Fixes

* replace inline svgs with warp icons ([#63](https://github.com/warp-ds/elements/issues/63)) ([f69fb59](https://github.com/warp-ds/elements/commit/f69fb59badda2306b9dbc32c95a96329e24de42c))

# [1.1.0](https://github.com/warp-ds/elements/compare/v1.0.1...v1.1.0) (2023-10-09)


### Features

* Add Badge component ([#55](https://github.com/warp-ds/elements/issues/55)) ([b73bfa6](https://github.com/warp-ds/elements/commit/b73bfa6bf3bfe8a93e8f42376c8cc42bce577bcb))
* **i18n:** add i18n support ([#61](https://github.com/warp-ds/elements/issues/61)) ([1735094](https://github.com/warp-ds/elements/commit/1735094e665f34f157e1339d3fe61a07d1ba3ba7))

# [1.1.0-next.2](https://github.com/warp-ds/elements/compare/v1.1.0-next.1...v1.1.0-next.2) (2023-10-06)


### Features

* **i18n:** add i18n support ([#61](https://github.com/warp-ds/elements/issues/61)) ([1735094](https://github.com/warp-ds/elements/commit/1735094e665f34f157e1339d3fe61a07d1ba3ba7))

# [1.1.0-next.1](https://github.com/warp-ds/elements/compare/v1.0.1...v1.1.0-next.1) (2023-09-25)


### Features

* Add Badge component ([#55](https://github.com/warp-ds/elements/issues/55)) ([b73bfa6](https://github.com/warp-ds/elements/commit/b73bfa6bf3bfe8a93e8f42376c8cc42bce577bcb))

## [1.0.1](https://github.com/warp-ds/elements/compare/v1.0.0...v1.0.1) (2023-09-25)


### Bug Fixes

* Add fullWidth button prop ([#56](https://github.com/warp-ds/elements/issues/56)) ([ba25a99](https://github.com/warp-ds/elements/commit/ba25a99c370bd01a31f961d96210a9ba3cb2a179))
* add lit to rollup options to be able to build icons ([#53](https://github.com/warp-ds/elements/issues/53)) ([5c90c00](https://github.com/warp-ds/elements/commit/5c90c0073b2de62a6c6455a51c3b6a706da768fb))
* add lit to rollup options to be able to build icons ([#62](https://github.com/warp-ds/elements/issues/62)) ([ad1d5e8](https://github.com/warp-ds/elements/commit/ad1d5e84c738f158950ed8e15db1ed48d4a5acdb))
* add sidebar to "local development pages" ([#43](https://github.com/warp-ds/elements/issues/43)) ([e3dc411](https://github.com/warp-ds/elements/commit/e3dc411a014b4510250723c19d0dab50f5859854))
* alert examples ([#59](https://github.com/warp-ds/elements/issues/59)) ([c63d9df](https://github.com/warp-ds/elements/commit/c63d9df59d8ebb5a8b7386edc60d2322a4f9ed1c))
* **attention:** popover target is visible on Chrome 109 ([#60](https://github.com/warp-ds/elements/issues/60)) ([dd3619a](https://github.com/warp-ds/elements/commit/dd3619ad2eceb5eacdedbec219389b31d753c1c1))
* no need for type check as secondary button is default ([#50](https://github.com/warp-ds/elements/issues/50)) ([089b1f0](https://github.com/warp-ds/elements/commit/089b1f06e9af4303753b4aa24dbdce5dc69498fe))
* remove classes for disabled buttons as there is no such thing in elements ([#51](https://github.com/warp-ds/elements/issues/51)) ([13ca7e7](https://github.com/warp-ds/elements/commit/13ca7e79e093108ea9b067c8a075143e5c43f1e5))
* use new button classes and improve conditions ([#48](https://github.com/warp-ds/elements/issues/48)) ([145caad](https://github.com/warp-ds/elements/commit/145caada393aad82dcc75e2a3986c1a20c45296b))
* use Warp Button component instead of button shortcuts ([8b498f6](https://github.com/warp-ds/elements/commit/8b498f653ddfa82967592a9846c022f7afcf4667))

## [1.0.1-next.10](https://github.com/warp-ds/elements/compare/v1.0.1-next.9...v1.0.1-next.10) (2023-09-22)


### Bug Fixes

* add lit to rollup options to be able to build icons ([#62](https://github.com/warp-ds/elements/issues/62)) ([ad1d5e8](https://github.com/warp-ds/elements/commit/ad1d5e84c738f158950ed8e15db1ed48d4a5acdb))

## [1.0.1-next.9](https://github.com/warp-ds/elements/compare/v1.0.1-next.8...v1.0.1-next.9) (2023-09-21)


### Bug Fixes

* add sidebar to "local development pages" ([#43](https://github.com/warp-ds/elements/issues/43)) ([e3dc411](https://github.com/warp-ds/elements/commit/e3dc411a014b4510250723c19d0dab50f5859854))

## [1.0.1-next.8](https://github.com/warp-ds/elements/compare/v1.0.1-next.7...v1.0.1-next.8) (2023-09-21)


### Bug Fixes

* **attention:** popover target is visible on Chrome 109 ([#60](https://github.com/warp-ds/elements/issues/60)) ([dd3619a](https://github.com/warp-ds/elements/commit/dd3619ad2eceb5eacdedbec219389b31d753c1c1))

## [1.0.1-next.7](https://github.com/warp-ds/elements/compare/v1.0.1-next.6...v1.0.1-next.7) (2023-09-21)


### Bug Fixes

* alert examples ([#59](https://github.com/warp-ds/elements/issues/59)) ([c63d9df](https://github.com/warp-ds/elements/commit/c63d9df59d8ebb5a8b7386edc60d2322a4f9ed1c))

## [1.0.1-next.6](https://github.com/warp-ds/elements/compare/v1.0.1-next.5...v1.0.1-next.6) (2023-09-20)


### Bug Fixes

* Add fullWidth button prop ([#56](https://github.com/warp-ds/elements/issues/56)) ([ba25a99](https://github.com/warp-ds/elements/commit/ba25a99c370bd01a31f961d96210a9ba3cb2a179))

## [1.0.1-next.5](https://github.com/warp-ds/elements/compare/v1.0.1-next.4...v1.0.1-next.5) (2023-09-19)


### Bug Fixes

* add lit to rollup options to be able to build icons ([#53](https://github.com/warp-ds/elements/issues/53)) ([5c90c00](https://github.com/warp-ds/elements/commit/5c90c0073b2de62a6c6455a51c3b6a706da768fb))

## [1.0.1-next.4](https://github.com/warp-ds/elements/compare/v1.0.1-next.3...v1.0.1-next.4) (2023-09-01)


### Bug Fixes

* remove classes for disabled buttons as there is no such thing in elements ([#51](https://github.com/warp-ds/elements/issues/51)) ([13ca7e7](https://github.com/warp-ds/elements/commit/13ca7e79e093108ea9b067c8a075143e5c43f1e5))

## [1.0.1-next.3](https://github.com/warp-ds/elements/compare/v1.0.1-next.2...v1.0.1-next.3) (2023-09-01)


### Bug Fixes

* no need for type check as secondary button is default ([#50](https://github.com/warp-ds/elements/issues/50)) ([089b1f0](https://github.com/warp-ds/elements/commit/089b1f06e9af4303753b4aa24dbdce5dc69498fe))

## [1.0.1-next.2](https://github.com/warp-ds/elements/compare/v1.0.1-next.1...v1.0.1-next.2) (2023-08-31)


### Bug Fixes

* use new button classes and improve conditions ([#48](https://github.com/warp-ds/elements/issues/48)) ([145caad](https://github.com/warp-ds/elements/commit/145caada393aad82dcc75e2a3986c1a20c45296b))

## [1.0.1-next.1](https://github.com/warp-ds/elements/compare/v1.0.0...v1.0.1-next.1) (2023-08-31)


### Bug Fixes

* use Warp Button component instead of button shortcuts ([8b498f6](https://github.com/warp-ds/elements/commit/8b498f653ddfa82967592a9846c022f7afcf4667))

# 1.0.0 (2023-08-31)


### Bug Fixes

* **@warp-ds/toast:** remove window reference from toast api bundle, fixing server-side rendering ([677c7ed](https://github.com/warp-ds/elements/commit/677c7edb4be269186f887a9522cc554edaea0d05))
* add component classes to card component ([#18](https://github.com/warp-ds/elements/issues/18)) ([d8af2fc](https://github.com/warp-ds/elements/commit/d8af2fc7e87738e620e9332c14f30d9776977bd8))
* add missing package-lock ([#24](https://github.com/warp-ds/elements/issues/24)) ([5bc0dbd](https://github.com/warp-ds/elements/commit/5bc0dbda49cdb2a6aaaa1327b15be3701a9d1132))
* add release step with semantic releases and eik ([#5](https://github.com/warp-ds/elements/issues/5)) ([6363e52](https://github.com/warp-ds/elements/commit/6363e52b6627f516c7d7223b0bfd137f6467abf9))
* add styles to textfield ([#11](https://github.com/warp-ds/elements/issues/11)) ([ed88c35](https://github.com/warp-ds/elements/commit/ed88c35d6e289019fd5ee8cb007b56c98bbba791))
* add tokens to button element ([77b3469](https://github.com/warp-ds/elements/commit/77b346996545f7a10155714f089764c6fd48a6d8))
* Add Warp component-classes to the box component ([#12](https://github.com/warp-ds/elements/issues/12)) ([fd55937](https://github.com/warp-ds/elements/commit/fd5593714ce9aad07449433fe2079f18ebdf992e))
* add Warp component-classes to the breadcrumbs component ([#14](https://github.com/warp-ds/elements/issues/14)) ([eb6763a](https://github.com/warp-ds/elements/commit/eb6763acf98a37ab48d39f054b6d8086088ef9e2))
* **alert:** use imported instead of inline classes ([#22](https://github.com/warp-ds/elements/issues/22)) ([2f37560](https://github.com/warp-ds/elements/commit/2f375608c0074e6708123396220310f73d4a85eb))
* build ([7792404](https://github.com/warp-ds/elements/commit/7792404948160752f3bea1a560156a582497152f))
* bump packages ([#23](https://github.com/warp-ds/elements/issues/23)) ([aa73bae](https://github.com/warp-ds/elements/commit/aa73bae89fb2dd55118815de960406e6cccc1c56))
* **docs:** set fonts' rem base on docs page to be 10px ([#25](https://github.com/warp-ds/elements/issues/25)) ([38e6781](https://github.com/warp-ds/elements/commit/38e67815e7f86c7fa23cd0b5098b810bab5c411a))
* **expandable:** add _hasTitle again to expandable classes ([199b146](https://github.com/warp-ds/elements/commit/199b14682f6ce68fdd2a63b17ba513d6a0c1a7b8))
* **expandable:** bumb warp versions ([1f8a983](https://github.com/warp-ds/elements/commit/1f8a98352806200d175d5cea9c64d6447516938f))
* **expandable:** fix chevron issue ([#28](https://github.com/warp-ds/elements/issues/28)) ([fc9481f](https://github.com/warp-ds/elements/commit/fc9481f67daf15278daf44b7e80bf46f4bee69e9))
* **expandable:** fix icon issue ([6cbd8db](https://github.com/warp-ds/elements/commit/6cbd8dbc5ea8e603352f939da77375704450f809))
* fix build ([9a8b2d4](https://github.com/warp-ds/elements/commit/9a8b2d4df06c0f414f452cba8e7336b1f1396871))
* guards ([dfa1ba0](https://github.com/warp-ds/elements/commit/dfa1ba0564e494711bb6baeea05583e2991c6d15))
* make styles on components work ([#9](https://github.com/warp-ds/elements/issues/9)) ([0aae500](https://github.com/warp-ds/elements/commit/0aae5004b7bb994610dc8ffb6afa8b274d6a1682))
* **package.json:** build toast api to publish missing scripts ([#39](https://github.com/warp-ds/elements/issues/39)) ([f73dd2f](https://github.com/warp-ds/elements/commit/f73dd2fba48eb7594efbd0fd2fd21810ad9743c6))
* **package.json:** bump semantic-release to 21.0.7 ([#36](https://github.com/warp-ds/elements/issues/36)) ([61f034a](https://github.com/warp-ds/elements/commit/61f034a7c9272a87bfe3ce4af596b20757f4f73a))
* **package.json:** remove unused dependency that caused deployment errors ([#16](https://github.com/warp-ds/elements/issues/16)) ([a447c62](https://github.com/warp-ds/elements/commit/a447c62b846b3c6a66739035ed930f2d239d7d15))
* **package.json:** update versions ([#29](https://github.com/warp-ds/elements/issues/29)) ([feb0ccf](https://github.com/warp-ds/elements/commit/feb0ccfaa8b57892d9a0c046287ddb84b4c166ae))
* provide correct import of windowExists after refactoring ([#41](https://github.com/warp-ds/elements/issues/41)) ([7ada8bd](https://github.com/warp-ds/elements/commit/7ada8bdef6ef2e8b7caf413e107c8737e983a419))
* **release.yml:** set pnpm version to 8 to fix recursive install errors ([#15](https://github.com/warp-ds/elements/issues/15)) ([21afc96](https://github.com/warp-ds/elements/commit/21afc965618e2a2030f1655750637c03d989ac49))
* remove bad code ([97d8068](https://github.com/warp-ds/elements/commit/97d806826b54184b513ae272a157bd2180cdf2a2))
* remove comments wrapping [@unocss-placeholder](https://github.com/unocss-placeholder) in components styles ([#19](https://github.com/warp-ds/elements/issues/19)) ([862c8cd](https://github.com/warp-ds/elements/commit/862c8cdf7b9a6e076c5cd465fcd8b457b56bebff))
* remove inline class from button link ([#26](https://github.com/warp-ds/elements/issues/26)) ([0a87895](https://github.com/warp-ds/elements/commit/0a8789564875ecfb2f54bff23abe48e56598f172))
* secondary and not quiet fix ([51b76b3](https://github.com/warp-ds/elements/commit/51b76b3ee7e55753d79963a6159c5a6026495559))
* **select:** add component classes to select ([#33](https://github.com/warp-ds/elements/issues/33)) ([8bdb2f5](https://github.com/warp-ds/elements/commit/8bdb2f507cb7e7cbb6f475a2800e895f09bb11b2))
* stable FINN prod alpha-release ([#32](https://github.com/warp-ds/elements/issues/32)) ([8351ef2](https://github.com/warp-ds/elements/commit/8351ef221671c9025bb61482ac7de1f4ea7888f0))
* **toast:** update classes + fix color issue on icons ([#27](https://github.com/warp-ds/elements/issues/27)) ([0f09a39](https://github.com/warp-ds/elements/commit/0f09a3978eb36b86ef93115d918bf1eccf770776))
* try vite build ([ffdeb02](https://github.com/warp-ds/elements/commit/ffdeb02b51952862bd0f9ce6f982457691b11a6a))
* update @warp-ds/uno and /css to 1.0.0 ([#44](https://github.com/warp-ds/elements/issues/44)) ([44aca9a](https://github.com/warp-ds/elements/commit/44aca9af105c5eab006248b02f7c200a7aae5ba1))
* use css packages instead of component-classes ([#31](https://github.com/warp-ds/elements/issues/31)) ([1bf8a0a](https://github.com/warp-ds/elements/commit/1bf8a0aee7d5cc46be495648beaf433996f0db4d))


### Features

* **alert:** warpify alert component ([#17](https://github.com/warp-ds/elements/issues/17)) ([2a01030](https://github.com/warp-ds/elements/commit/2a01030420ad052fde9e38f04906f39663e5fa61))
* **attention:** warpify attention ([#21](https://github.com/warp-ds/elements/issues/21)) ([79b5b64](https://github.com/warp-ds/elements/commit/79b5b646be5ab2d4585bfba4de93dd30bbab121d))
* **expandable:** add warp component classes for expandable ([3a28e93](https://github.com/warp-ds/elements/commit/3a28e939c40661b8e10bfe9b4a5952a6fe0555c4))
* **toast:** warpify toast ([#20](https://github.com/warp-ds/elements/issues/20)) ([d1dc939](https://github.com/warp-ds/elements/commit/d1dc9394d872c19095abd0b0bc8a11dbca603464))
* **workflows:** add eik aliasing script to release.yml ([#10](https://github.com/warp-ds/elements/issues/10)) ([bc4a76f](https://github.com/warp-ds/elements/commit/bc4a76f29ee0409a868edaa14c8087d12c6cdb57))


### Reverts

* Revert "chore(release): 1.0.0-alpha.28 [skip ci]" (#35) ([4770de9](https://github.com/warp-ds/elements/commit/4770de948a1a8aa1cd8d2f1a77b644f63781f145)), closes [#35](https://github.com/warp-ds/elements/issues/35)

# [1.0.0-alpha.32](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.31...v1.0.0-alpha.32) (2023-08-30)


### Bug Fixes

* update @warp-ds/uno and /css to 1.0.0 ([#44](https://github.com/warp-ds/elements/issues/44)) ([44aca9a](https://github.com/warp-ds/elements/commit/44aca9af105c5eab006248b02f7c200a7aae5ba1))

# [1.0.0-alpha.31](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.30...v1.0.0-alpha.31) (2023-08-22)


### Bug Fixes

* provide correct import of windowExists after refactoring ([#41](https://github.com/warp-ds/elements/issues/41)) ([7ada8bd](https://github.com/warp-ds/elements/commit/7ada8bdef6ef2e8b7caf413e107c8737e983a419))

# [1.0.0-alpha.30](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.29...v1.0.0-alpha.30) (2023-08-21)


### Bug Fixes

* **package.json:** build toast api to publish missing scripts ([#39](https://github.com/warp-ds/elements/issues/39)) ([f73dd2f](https://github.com/warp-ds/elements/commit/f73dd2fba48eb7594efbd0fd2fd21810ad9743c6))

# [1.0.0-alpha.29](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.28...v1.0.0-alpha.29) (2023-08-15)


### Bug Fixes

* **@warp-ds/toast:** remove window reference from toast api bundle, fixing server-side rendering ([677c7ed](https://github.com/warp-ds/elements/commit/677c7edb4be269186f887a9522cc554edaea0d05))

# [1.0.0-alpha.28](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.27...v1.0.0-alpha.28) (2023-07-14)


### Bug Fixes

* **package.json:** bump semantic-release to 21.0.7 ([#36](https://github.com/warp-ds/elements/issues/36)) ([61f034a](https://github.com/warp-ds/elements/commit/61f034a7c9272a87bfe3ce4af596b20757f4f73a))
* use css packages instead of component-classes ([#31](https://github.com/warp-ds/elements/issues/31)) ([1bf8a0a](https://github.com/warp-ds/elements/commit/1bf8a0aee7d5cc46be495648beaf433996f0db4d))


### Reverts

* Revert "chore(release): 1.0.0-alpha.28 [skip ci]" (#35) ([4770de9](https://github.com/warp-ds/elements/commit/4770de948a1a8aa1cd8d2f1a77b644f63781f145)), closes [#35](https://github.com/warp-ds/elements/issues/35)

# [1.0.0-alpha.27](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.26...v1.0.0-alpha.27) (2023-07-10)


### Bug Fixes

* stable FINN prod alpha-release ([#32](https://github.com/warp-ds/elements/issues/32)) ([8351ef2](https://github.com/warp-ds/elements/commit/8351ef221671c9025bb61482ac7de1f4ea7888f0))

# [1.0.0-alpha.26](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.25...v1.0.0-alpha.26) (2023-07-10)


### Bug Fixes

* **select:** add component classes to select ([#33](https://github.com/warp-ds/elements/issues/33)) ([8bdb2f5](https://github.com/warp-ds/elements/commit/8bdb2f507cb7e7cbb6f475a2800e895f09bb11b2))

# [1.0.0-alpha.25](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.24...v1.0.0-alpha.25) (2023-06-27)


### Bug Fixes

* **package.json:** update versions ([#29](https://github.com/warp-ds/elements/issues/29)) ([feb0ccf](https://github.com/warp-ds/elements/commit/feb0ccfaa8b57892d9a0c046287ddb84b4c166ae))

# [1.0.0-alpha.24](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.23...v1.0.0-alpha.24) (2023-06-22)


### Bug Fixes

* **expandable:** fix chevron issue ([#28](https://github.com/warp-ds/elements/issues/28)) ([fc9481f](https://github.com/warp-ds/elements/commit/fc9481f67daf15278daf44b7e80bf46f4bee69e9))

# [1.0.0-alpha.23](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.22...v1.0.0-alpha.23) (2023-06-19)


### Bug Fixes

* **toast:** update classes + fix color issue on icons ([#27](https://github.com/warp-ds/elements/issues/27)) ([0f09a39](https://github.com/warp-ds/elements/commit/0f09a3978eb36b86ef93115d918bf1eccf770776))

# [1.0.0-alpha.22](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.21...v1.0.0-alpha.22) (2023-06-09)


### Bug Fixes

* remove inline class from button link ([#26](https://github.com/warp-ds/elements/issues/26)) ([0a87895](https://github.com/warp-ds/elements/commit/0a8789564875ecfb2f54bff23abe48e56598f172))

# [1.0.0-alpha.21](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.20...v1.0.0-alpha.21) (2023-06-07)


### Bug Fixes

* add missing package-lock ([#24](https://github.com/warp-ds/elements/issues/24)) ([5bc0dbd](https://github.com/warp-ds/elements/commit/5bc0dbda49cdb2a6aaaa1327b15be3701a9d1132))
* bump packages ([#23](https://github.com/warp-ds/elements/issues/23)) ([aa73bae](https://github.com/warp-ds/elements/commit/aa73bae89fb2dd55118815de960406e6cccc1c56))
* **docs:** set fonts' rem base on docs page to be 10px ([#25](https://github.com/warp-ds/elements/issues/25)) ([38e6781](https://github.com/warp-ds/elements/commit/38e67815e7f86c7fa23cd0b5098b810bab5c411a))

# [1.0.0-alpha.20](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.19...v1.0.0-alpha.20) (2023-06-01)


### Bug Fixes

* **alert:** use imported instead of inline classes ([#22](https://github.com/warp-ds/elements/issues/22)) ([2f37560](https://github.com/warp-ds/elements/commit/2f375608c0074e6708123396220310f73d4a85eb))

# [1.0.0-alpha.19](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.18...v1.0.0-alpha.19) (2023-05-29)


### Features

* **attention:** warpify attention ([#21](https://github.com/warp-ds/elements/issues/21)) ([79b5b64](https://github.com/warp-ds/elements/commit/79b5b646be5ab2d4585bfba4de93dd30bbab121d))

# [1.0.0-alpha.18](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.17...v1.0.0-alpha.18) (2023-05-26)


### Features

* **toast:** warpify toast ([#20](https://github.com/warp-ds/elements/issues/20)) ([d1dc939](https://github.com/warp-ds/elements/commit/d1dc9394d872c19095abd0b0bc8a11dbca603464))

# [1.0.0-alpha.17](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.16...v1.0.0-alpha.17) (2023-05-17)


### Bug Fixes

* add component classes to card component ([#18](https://github.com/warp-ds/elements/issues/18)) ([d8af2fc](https://github.com/warp-ds/elements/commit/d8af2fc7e87738e620e9332c14f30d9776977bd8))

# [1.0.0-alpha.16](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) (2023-05-16)


### Bug Fixes

* remove comments wrapping [@unocss-placeholder](https://github.com/unocss-placeholder) in components styles ([#19](https://github.com/warp-ds/elements/issues/19)) ([862c8cd](https://github.com/warp-ds/elements/commit/862c8cdf7b9a6e076c5cd465fcd8b457b56bebff))

# [1.0.0-alpha.15](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2023-05-12)


### Features

* **alert:** warpify alert component ([#17](https://github.com/warp-ds/elements/issues/17)) ([2a01030](https://github.com/warp-ds/elements/commit/2a01030420ad052fde9e38f04906f39663e5fa61))

# [1.0.0-alpha.14](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2023-04-27)


### Bug Fixes

* add Warp component-classes to the breadcrumbs component ([#14](https://github.com/warp-ds/elements/issues/14)) ([eb6763a](https://github.com/warp-ds/elements/commit/eb6763acf98a37ab48d39f054b6d8086088ef9e2))
* **package.json:** remove unused dependency that caused deployment errors ([#16](https://github.com/warp-ds/elements/issues/16)) ([a447c62](https://github.com/warp-ds/elements/commit/a447c62b846b3c6a66739035ed930f2d239d7d15))
* **release.yml:** set pnpm version to 8 to fix recursive install errors ([#15](https://github.com/warp-ds/elements/issues/15)) ([21afc96](https://github.com/warp-ds/elements/commit/21afc965618e2a2030f1655750637c03d989ac49))

# [1.0.0-alpha.13](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2023-04-25)


### Bug Fixes

* **expandable:** add _hasTitle again to expandable classes ([199b146](https://github.com/warp-ds/elements/commit/199b14682f6ce68fdd2a63b17ba513d6a0c1a7b8))
* **expandable:** bumb warp versions ([1f8a983](https://github.com/warp-ds/elements/commit/1f8a98352806200d175d5cea9c64d6447516938f))
* **expandable:** fix icon issue ([6cbd8db](https://github.com/warp-ds/elements/commit/6cbd8dbc5ea8e603352f939da77375704450f809))


### Features

* **expandable:** add warp component classes for expandable ([3a28e93](https://github.com/warp-ds/elements/commit/3a28e939c40661b8e10bfe9b4a5952a6fe0555c4))

# [1.0.0-alpha.12](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2023-04-18)


### Bug Fixes

* Add Warp component-classes to the box component ([#12](https://github.com/warp-ds/elements/issues/12)) ([fd55937](https://github.com/warp-ds/elements/commit/fd5593714ce9aad07449433fe2079f18ebdf992e))

# [1.0.0-alpha.11](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2023-04-18)


### Bug Fixes

* add styles to textfield ([#11](https://github.com/warp-ds/elements/issues/11)) ([ed88c35](https://github.com/warp-ds/elements/commit/ed88c35d6e289019fd5ee8cb007b56c98bbba791))

# [1.0.0-alpha.10](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2023-04-13)


### Features

* **workflows:** add eik aliasing script to release.yml ([#10](https://github.com/warp-ds/elements/issues/10)) ([bc4a76f](https://github.com/warp-ds/elements/commit/bc4a76f29ee0409a868edaa14c8087d12c6cdb57))

# [1.0.0-alpha.9](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2023-03-31)


### Bug Fixes

* secondary and not quiet fix ([51b76b3](https://github.com/warp-ds/elements/commit/51b76b3ee7e55753d79963a6159c5a6026495559))

# [1.0.0-alpha.8](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2023-03-31)


### Bug Fixes

* build ([7792404](https://github.com/warp-ds/elements/commit/7792404948160752f3bea1a560156a582497152f))

# [1.0.0-alpha.7](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2023-03-31)


### Bug Fixes

* remove bad code ([97d8068](https://github.com/warp-ds/elements/commit/97d806826b54184b513ae272a157bd2180cdf2a2))

# [1.0.0-alpha.6](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2023-03-31)


### Bug Fixes

* fix build ([9a8b2d4](https://github.com/warp-ds/elements/commit/9a8b2d4df06c0f414f452cba8e7336b1f1396871))

# [1.0.0-alpha.5](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2023-03-31)


### Bug Fixes

* try vite build ([ffdeb02](https://github.com/warp-ds/elements/commit/ffdeb02b51952862bd0f9ce6f982457691b11a6a))

# [1.0.0-alpha.4](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2023-03-31)


### Bug Fixes

* add tokens to button element ([77b3469](https://github.com/warp-ds/elements/commit/77b346996545f7a10155714f089764c6fd48a6d8))

# [1.0.0-alpha.3](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2023-03-29)


### Bug Fixes

* guards ([dfa1ba0](https://github.com/warp-ds/elements/commit/dfa1ba0564e494711bb6baeea05583e2991c6d15))

# [1.0.0-alpha.2](https://github.com/warp-ds/elements/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2023-03-29)


### Bug Fixes

* make styles on components work ([#9](https://github.com/warp-ds/elements/issues/9)) ([0aae500](https://github.com/warp-ds/elements/commit/0aae5004b7bb994610dc8ffb6afa8b274d6a1682))

# 1.0.0-alpha.1 (2023-03-17)


### Bug Fixes

* add release step with semantic releases and eik ([#5](https://github.com/warp-ds/elements/issues/5)) ([6363e52](https://github.com/warp-ds/elements/commit/6363e52b6627f516c7d7223b0bfd137f6467abf9))

# 0.0.1 (2023-03-15)
### Creation
Initial copy of [elements from https://github.com/fabric-ds/elements](https://github.com/fabric-ds/elements).  
For historical changes, see: [Changelog for @fabric-ds/elements](https://github.com/fabric-ds/elements/blob/next/CHANGELOG.md)
