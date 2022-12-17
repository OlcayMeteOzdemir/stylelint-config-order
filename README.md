# stylelint-config-order

Custom StyleLint settings for CSS property sort order as an extensible shared config.

## Installation

If using npm version 5+:

```bash
npx install-peerdeps --dev @meteozdemir/stylelint-config-order
```

If using npm version version < 5:

```bash
npm install -g install-peerdeps
install-peerdeps --dev @meteozdemir/stylelint-config-order
```

If want to install manually without install-peerdeps CLI:

```bash
npm i -D @meteozdemir/stylelint-config-order stylelint stylelint-order
```

## Usage

Simply create a `.stylelintrc` file in the root of project and copy code below.

```json
{
    "extends": ["@meteozdemir/stylelint-config-order"],
    "rules": {}
}
```

## Rule Override

Add any rule you want to override to rules object in `.stylelintrc` file.

```json
{
    "extends": ["@meteozdemir/stylelint-config-order"],
    "rules": {
        // ...
        "order/order": ["at-rules", "dollar-variables", "custom-properties"],
        "order/properties-order": [
            {
                "groupName": "Grid Layout",
                "properties": ["grid", "grid-row", "grid-column"]
            }
        ]
    }
}
```
