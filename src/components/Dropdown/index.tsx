import React, { useRef, useEffect } from 'react';
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
  const [clickedMenu, { toggle: toggleClickedMenu, set: setClicked }] = useToggle(false);
  const inputEl = useRef(null);

  const onMenuClick = (event: any) => {
    toggleClickedMenu();
    onChange(event);
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }
        setClicked(false);
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(inputEl);

  return (
    <div ref={inputEl} className={`${styles.dropdown} ${clickedMenu && styles.open} `}>
      <button type="button" className={styles.select} title="Sort by" onClick={toggleClickedMenu}>
        <span className={styles.label}>
          <span className={styles.labelText}>{label}</span>
        </span>
        <svg className={`gl-icon  ${styles.selectIcon}`}>
          <use xlinkHref="#dropdown" />
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
