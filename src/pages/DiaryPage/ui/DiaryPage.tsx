import React, { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DiaryPage.module.scss';

interface Subject {
    name: string;
    grade: string;
}
interface DiaryPageProps {
    className?: string;
}
const DiaryPage = (props: DiaryPageProps) => {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [subjectName, setSubjectName] = useState<string>('');
    const [subjectGrade, setSubjectGrade] = useState<string>('');
    const {
        className,
    } = props;
    // Функция для получения сохраненных данных из localStorage при загрузке
    useEffect(() => {
        const savedSubjects = localStorage.getItem('schoolDiarySubjects');
        if (savedSubjects) {
            setSubjects(JSON.parse(savedSubjects));
        }
    }, []);

    // Функция для сохранения данных в localStorage при изменении subjects
    useEffect(() => {
        localStorage.setItem('schoolDiarySubjects', JSON.stringify(subjects));
    }, [subjects]);
    const addSubject = () => {
        if (subjectName.trim() === '' || subjectGrade.trim() === '') {
            return;
        }

        const newSubject: Subject = {
            name: subjectName,
            grade: subjectGrade,
        };

        setSubjects([...subjects, newSubject]);
        setSubjectName('');
        setSubjectGrade('');
    };

    const removeSubject = (index: number) => {
        const updatedSubjects = [...subjects];
        updatedSubjects.splice(index, 1);
        setSubjects(updatedSubjects);
    };

    return (
        <div className={classNames(cls.mainDiv, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 className={classNames(cls.h1n, {}, [className])}>Школьный дневник</h1>
            <div>
                {/* eslint-disable-next-line i18next/no-literal-string,max-len */}
                <input className={classNames(cls.input, {}, [className])} type="text" placeholder="Название предмета" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
                {/* eslint-disable-next-line i18next/no-literal-string,max-len */}
                <input className={classNames(cls.input, {}, [className])} type="text" placeholder="Оценка" value={subjectGrade} onChange={(e) => setSubjectGrade(e.target.value)} />
                {/* eslint-disable-next-line i18next/no-literal-string,react/button-has-type,max-len */}
                <button className={classNames(cls.button, {}, [className])} onClick={addSubject}>Добавить предмет</button>
            </div>
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}>
                        {subject.name}
                        {' '}
                        -
                        {' '}
                        {subject.grade}
                        {/* eslint-disable-next-line react/button-has-type,i18next/no-literal-string,max-len */}
                        <button className={classNames(cls.deleteButton, {}, [className])} onClick={() => removeSubject(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(DiaryPage);
