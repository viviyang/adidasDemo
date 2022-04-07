import React from 'react';
import styles from './index.module.scss';
import { useToggle } from 'ahooks';

interface OptionProp {
  label: string;
  value: string;
}

interface DropdownProp {
  label: string;
  value: string;
  options: OptionProp[];
  onChange: (event: any) => void;
}

const Dropdown: React.FC<DropdownProp> = ({ label, value, options, onChange }) => {
  const [clickedMenu, { toggle: setClickedMenu }] = useToggle(false);
  const onMenuClick = (event: any) => {
    setClickedMenu();
    onChange(event);
  };
  return (
    <div className={`${styles.dropdown} ${clickedMenu && styles.open}  `}>
      <button type="button" className={styles.select} title="Sort by" onClick={setClickedMenu}>
        <span className={styles.label}>
          <span className={styles.labelText}>{label}</span>
        </span>
        <svg className={`gl-icon  ${styles.selectIcon}`}>
          <use xlinkHref="#dropdown"></use>
        </svg>
      </button>
      <div className={styles.options}>
        <ul className={styles.list} data-value={value} role="listbox" onClick={onMenuClick}>
          {options.map((option) => (
            <li key={option.value} className={styles.item} role="option" aria-selected="false">
              <button className={styles.option} type="button" value={option.value}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
