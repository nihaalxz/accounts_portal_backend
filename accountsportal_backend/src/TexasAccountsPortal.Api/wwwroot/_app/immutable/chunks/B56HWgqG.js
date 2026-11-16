import { B as append, H as from_html, I as if_block, Mt as push, Rt as reset, V as comment, dt as child, ft as first_child, h as attribute_effect, j as snippet, jt as pop, o as prop, s as rest_props, u as bind_this, zt as noop } from "./BRNvcyYY.js";
import "./DhaYE-8x.js";
import { n as extendTailwindMerge, r as twMerge, t as cn } from "./CrCNvvRb.js";
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var SPACE_REGEX = /\s+/g;
var removeExtraSpaces = (str) => {
	if (typeof str !== "string" || !str) return str;
	return str.replace(SPACE_REGEX, " ").trim();
};
var cx = (...classnames) => {
	const classList = [];
	const buildClassString = (input) => {
		if (!input && input !== 0 && input !== 0n) return;
		if (Array.isArray(input)) {
			for (let i = 0, len = input.length; i < len; i++) buildClassString(input[i]);
			return;
		}
		const type = typeof input;
		if (type === "string" || type === "number" || type === "bigint") {
			if (type === "number" && input !== input) return;
			classList.push(String(input));
		} else if (type === "object") {
			const keys = Object.keys(input);
			for (let i = 0, len = keys.length; i < len; i++) {
				const key = keys[i];
				if (input[key]) classList.push(key);
			}
		}
	};
	for (let i = 0, len = classnames.length; i < len; i++) {
		const c = classnames[i];
		if (c !== null && c !== void 0) buildClassString(c);
	}
	return classList.length > 0 ? removeExtraSpaces(classList.join(" ")) : void 0;
};
var falsyToString = (value) => value === false ? "false" : value === true ? "true" : value === 0 ? "0" : value;
var isEmptyObject = (obj) => {
	if (!obj || typeof obj !== "object") return true;
	for (const _ in obj) return false;
	return true;
};
var isEqual = (obj1, obj2) => {
	if (obj1 === obj2) return true;
	if (!obj1 || !obj2) return false;
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) return false;
	for (let i = 0; i < keys1.length; i++) {
		const key = keys1[i];
		if (!keys2.includes(key)) return false;
		if (obj1[key] !== obj2[key]) return false;
	}
	return true;
};
var joinObjects = (obj1, obj2) => {
	for (const key in obj2) if (Object.prototype.hasOwnProperty.call(obj2, key)) {
		const val2 = obj2[key];
		if (key in obj1) obj1[key] = cx(obj1[key], val2);
		else obj1[key] = val2;
	}
	return obj1;
};
var flat = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		if (Array.isArray(el)) flat(el, target);
		else if (el) target.push(el);
	}
};
var flatMergeArrays = (...arrays) => {
	const result = [];
	flat(arrays, result);
	const filtered = [];
	for (let i = 0; i < result.length; i++) if (result[i]) filtered.push(result[i]);
	return filtered;
};
var mergeObjects = (obj1, obj2) => {
	const result = {};
	for (const key in obj1) {
		const val1 = obj1[key];
		if (key in obj2) {
			const val2 = obj2[key];
			if (Array.isArray(val1) || Array.isArray(val2)) result[key] = flatMergeArrays(val2, val1);
			else if (typeof val1 === "object" && typeof val2 === "object" && val1 && val2) result[key] = mergeObjects(val1, val2);
			else result[key] = val2 + " " + val1;
		} else result[key] = val1;
	}
	for (const key in obj2) if (!(key in obj1)) result[key] = obj2[key];
	return result;
};
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-RZF76H2U.js
var defaultConfig = {
	twMerge: true,
	twMergeConfig: {}
};
function createState() {
	let cachedTwMerge = null;
	let cachedTwMergeConfig = {};
	let didTwMergeConfigChange = false;
	return {
		get cachedTwMerge() {
			return cachedTwMerge;
		},
		set cachedTwMerge(value) {
			cachedTwMerge = value;
		},
		get cachedTwMergeConfig() {
			return cachedTwMergeConfig;
		},
		set cachedTwMergeConfig(value) {
			cachedTwMergeConfig = value;
		},
		get didTwMergeConfigChange() {
			return didTwMergeConfigChange;
		},
		set didTwMergeConfigChange(value) {
			didTwMergeConfigChange = value;
		},
		reset() {
			cachedTwMerge = null;
			cachedTwMergeConfig = {};
			didTwMergeConfigChange = false;
		}
	};
}
var state = createState();
var getTailwindVariants = (cn) => {
	const tv = (options, configProp) => {
		const { extend = null, slots: slotProps = {}, variants: variantsProps = {}, compoundVariants: compoundVariantsProps = [], compoundSlots = [], defaultVariants: defaultVariantsProps = {} } = options;
		const config = {
			...defaultConfig,
			...configProp
		};
		const base = extend?.base ? cx(extend.base, options?.base) : options?.base;
		const variants = extend?.variants && !isEmptyObject(extend.variants) ? mergeObjects(variantsProps, extend.variants) : variantsProps;
		const defaultVariants = extend?.defaultVariants && !isEmptyObject(extend.defaultVariants) ? {
			...extend.defaultVariants,
			...defaultVariantsProps
		} : defaultVariantsProps;
		if (!isEmptyObject(config.twMergeConfig) && !isEqual(config.twMergeConfig, state.cachedTwMergeConfig)) {
			state.didTwMergeConfigChange = true;
			state.cachedTwMergeConfig = config.twMergeConfig;
		}
		const isExtendedSlotsEmpty = isEmptyObject(extend?.slots);
		const componentSlots = !isEmptyObject(slotProps) ? {
			base: cx(options?.base, isExtendedSlotsEmpty && extend?.base),
			...slotProps
		} : {};
		const slots = isExtendedSlotsEmpty ? componentSlots : joinObjects({ ...extend?.slots }, isEmptyObject(componentSlots) ? { base: options?.base } : componentSlots);
		const compoundVariants = isEmptyObject(extend?.compoundVariants) ? compoundVariantsProps : flatMergeArrays(extend?.compoundVariants, compoundVariantsProps);
		const component = (props) => {
			if (isEmptyObject(variants) && isEmptyObject(slotProps) && isExtendedSlotsEmpty) return cn(base, props?.class, props?.className)(config);
			if (compoundVariants && !Array.isArray(compoundVariants)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof compoundVariants}`);
			if (compoundSlots && !Array.isArray(compoundSlots)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof compoundSlots}`);
			const getVariantValue = (variant, vrs = variants, _slotKey = null, slotProps2 = null) => {
				const variantObj = vrs[variant];
				if (!variantObj || isEmptyObject(variantObj)) return null;
				const variantProp = slotProps2?.[variant] ?? props?.[variant];
				if (variantProp === null) return null;
				const variantKey = falsyToString(variantProp);
				if (typeof variantKey === "object") return null;
				const defaultVariantProp = defaultVariants?.[variant];
				return variantObj[(variantKey != null ? variantKey : falsyToString(defaultVariantProp)) || "false"];
			};
			const getVariantClassNames = () => {
				if (!variants) return null;
				const keys = Object.keys(variants);
				const result = [];
				for (let i = 0; i < keys.length; i++) {
					const value = getVariantValue(keys[i], variants);
					if (value) result.push(value);
				}
				return result;
			};
			const getVariantClassNamesBySlotKey = (slotKey, slotProps2) => {
				if (!variants || typeof variants !== "object") return null;
				const result = [];
				for (const variant in variants) {
					const variantValue = getVariantValue(variant, variants, slotKey, slotProps2);
					const value = slotKey === "base" && typeof variantValue === "string" ? variantValue : variantValue && variantValue[slotKey];
					if (value) result.push(value);
				}
				return result;
			};
			const propsWithoutUndefined = {};
			for (const prop in props) {
				const value = props[prop];
				if (value !== void 0) propsWithoutUndefined[prop] = value;
			}
			const getCompleteProps = (key, slotProps2) => {
				const initialProp = typeof props?.[key] === "object" ? { [key]: props[key]?.initial } : {};
				return {
					...defaultVariants,
					...propsWithoutUndefined,
					...initialProp,
					...slotProps2
				};
			};
			const getCompoundVariantsValue = (cv = [], slotProps2) => {
				const result = [];
				const cvLength = cv.length;
				for (let i = 0; i < cvLength; i++) {
					const { class: tvClass, className: tvClassName, ...compoundVariantOptions } = cv[i];
					let isValid = true;
					const completeProps = getCompleteProps(null, slotProps2);
					for (const key in compoundVariantOptions) {
						const value = compoundVariantOptions[key];
						const completePropsValue = completeProps[key];
						if (Array.isArray(value)) {
							if (!value.includes(completePropsValue)) {
								isValid = false;
								break;
							}
						} else {
							if ((value == null || value === false) && (completePropsValue == null || completePropsValue === false)) continue;
							if (completePropsValue !== value) {
								isValid = false;
								break;
							}
						}
					}
					if (isValid) {
						if (tvClass) result.push(tvClass);
						if (tvClassName) result.push(tvClassName);
					}
				}
				return result;
			};
			const getCompoundVariantClassNamesBySlot = (slotProps2) => {
				const compoundClassNames = getCompoundVariantsValue(compoundVariants, slotProps2);
				if (!Array.isArray(compoundClassNames)) return compoundClassNames;
				const result = {};
				const cnFn = cn;
				for (let i = 0; i < compoundClassNames.length; i++) {
					const className = compoundClassNames[i];
					if (typeof className === "string") result.base = cnFn(result.base, className)(config);
					else if (typeof className === "object") for (const slot in className) result[slot] = cnFn(result[slot], className[slot])(config);
				}
				return result;
			};
			const getCompoundSlotClassNameBySlot = (slotProps2) => {
				if (compoundSlots.length < 1) return null;
				const result = {};
				const completeProps = getCompleteProps(null, slotProps2);
				for (let i = 0; i < compoundSlots.length; i++) {
					const { slots: slots2 = [], class: slotClass, className: slotClassName, ...slotVariants } = compoundSlots[i];
					if (!isEmptyObject(slotVariants)) {
						let isValid = true;
						for (const key in slotVariants) {
							const completePropsValue = completeProps[key];
							const slotVariantValue = slotVariants[key];
							if (completePropsValue === void 0 || (Array.isArray(slotVariantValue) ? !slotVariantValue.includes(completePropsValue) : slotVariantValue !== completePropsValue)) {
								isValid = false;
								break;
							}
						}
						if (!isValid) continue;
					}
					for (let j = 0; j < slots2.length; j++) {
						const slotName = slots2[j];
						if (!result[slotName]) result[slotName] = [];
						result[slotName].push([slotClass, slotClassName]);
					}
				}
				return result;
			};
			if (!isEmptyObject(slotProps) || !isExtendedSlotsEmpty) {
				const slotsFns = {};
				if (typeof slots === "object" && !isEmptyObject(slots)) {
					const cnFn = cn;
					for (const slotKey in slots) slotsFns[slotKey] = (slotProps2) => {
						const compoundVariantClasses = getCompoundVariantClassNamesBySlot(slotProps2);
						const compoundSlotClasses = getCompoundSlotClassNameBySlot(slotProps2);
						return cnFn(slots[slotKey], getVariantClassNamesBySlotKey(slotKey, slotProps2), compoundVariantClasses ? compoundVariantClasses[slotKey] : void 0, compoundSlotClasses ? compoundSlotClasses[slotKey] : void 0, slotProps2?.class, slotProps2?.className)(config);
					};
				}
				return slotsFns;
			}
			return cn(base, getVariantClassNames(), getCompoundVariantsValue(compoundVariants), props?.class, props?.className)(config);
		};
		const getVariantKeys = () => {
			if (!variants || typeof variants !== "object") return;
			return Object.keys(variants);
		};
		component.variantKeys = getVariantKeys();
		component.extend = extend;
		component.base = base;
		component.slots = slots;
		component.variants = variants;
		component.defaultVariants = defaultVariants;
		component.compoundSlots = compoundSlots;
		component.compoundVariants = compoundVariants;
		return component;
	};
	const createTV = (configProp) => {
		return (options, config) => tv(options, config ? mergeObjects(configProp, config) : configProp);
	};
	return {
		tv,
		createTV
	};
};
//#endregion
//#region node_modules/tailwind-variants/dist/index.js
var createTwMerge = (cachedTwMergeConfig) => {
	return isEmptyObject(cachedTwMergeConfig) ? twMerge : extendTailwindMerge({
		...cachedTwMergeConfig,
		extend: {
			theme: cachedTwMergeConfig.theme,
			classGroups: cachedTwMergeConfig.classGroups,
			conflictingClassGroupModifiers: cachedTwMergeConfig.conflictingClassGroupModifiers,
			conflictingClassGroups: cachedTwMergeConfig.conflictingClassGroups,
			...cachedTwMergeConfig.extend
		}
	});
};
var executeMerge = (classnames, config) => {
	const base = cx(classnames);
	if (!base || !(config?.twMerge ?? true)) return base;
	if (!state.cachedTwMerge || state.didTwMergeConfigChange) {
		state.didTwMergeConfigChange = false;
		state.cachedTwMerge = createTwMerge(state.cachedTwMergeConfig);
	}
	return state.cachedTwMerge(base) || void 0;
};
var cnMerge = (...classnames) => {
	return (config) => executeMerge(classnames, config);
};
var { createTV, tv } = getTailwindVariants(cnMerge);
//#endregion
//#region src/lib/components/ui/button/button.svelte
var buttonVariants = tv({
	base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class",
	"variant",
	"size",
	"ref",
	"href",
	"type",
	"disabled",
	"children"
]);
var root = from_html(`<a><!></a>`);
var root_1 = from_html(`<button><!></button>`);
function Button($$anchor, $$props) {
	push($$props, true);
	let variant = prop($$props, "variant", 3, "default"), size = prop($$props, "size", 3, "default"), ref = prop($$props, "ref", 15, null), href = prop($$props, "href", 3, void 0), type = prop($$props, "type", 3, "button"), restProps = rest_props($$props, rest_excludes);
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var a = root();
		attribute_effect(a, ($0) => ({
			"data-slot": "button",
			class: $0,
			href: $$props.disabled ? void 0 : href(),
			"aria-disabled": $$props.disabled,
			role: $$props.disabled ? "link" : void 0,
			tabindex: $$props.disabled ? -1 : void 0,
			...restProps
		}), [() => cn(buttonVariants({
			variant: variant(),
			size: size()
		}), $$props.class)]);
		snippet(child(a), () => $$props.children ?? noop);
		reset(a);
		bind_this(a, ($$value) => ref($$value), () => ref());
		append($$anchor, a);
	};
	var alternate = ($$anchor) => {
		var button = root_1();
		attribute_effect(button, ($0) => ({
			"data-slot": "button",
			class: $0,
			type: type(),
			disabled: $$props.disabled,
			...restProps
		}), [() => cn(buttonVariants({
			variant: variant(),
			size: size()
		}), $$props.class)]);
		snippet(child(button), () => $$props.children ?? noop);
		reset(button);
		bind_this(button, ($$value) => ref($$value), () => ref());
		append($$anchor, button);
	};
	if_block(node, ($$render) => {
		if (href()) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
export { tv as n, Button as t };
