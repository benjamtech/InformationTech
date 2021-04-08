import { clear } from "console";
import React, { useEffect, useState } from "react";
import "./VikarWeb.css"
import "./VikarWebModal.css"

interface TeacherData {
    fornavn: string;
    etternavn: string;
    tlf: string;
    epost: string;
    vikar_id: number;
}


export default () => {
    const [teachers, setTeachers] = useState<TeacherData[]>([])
    const [modal, setModal] = useState<boolean>(false);
    const [fornavn, setFornavn] = useState<string>("");
    const [etternavn, setEtternavn] = useState<string>("");
    const [epost, setEpost] = useState<string>("");
    const [tlf, setTlf] = useState<string>("");

    useEffect(() => {
        getTeacher();
    }, [])

    const getTeacher = () => {
        const options: RequestInit = {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

        fetch("/api/node/vikarweb/vikar", options)
            .then((response) => response.json())
            .then((data) => {
                setTeachers(data);
            }).catch(() => {
                alert("Error getTeacher")
            });
    }

    const addTeacher = (e: React.FormEvent) => {
        e.preventDefault();

        const options: RequestInit = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fornavn,
                etternavn,
                tlf,
                epost,
            }),
        }

        fetch("/api/node/vikarweb/vikar", options)
            .then((response) => response.json())
            .then((data) => {
                clearModal();
                getTeacher();
            }).catch((error) => {
                clearModal();
                alert("Error: noe har gått galt. Er det noe duplikat data?")
            });
    }

    const deleteTeacher = (id: number) => {
        const options: RequestInit = {
            method: "delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

        fetch(`/api/node/vikarweb/vikar/${id}`, options)
            .then((response) => response.json())
            .then((data) => {
                getTeacher();
            }).catch(() => {
                alert("Error deleteTeacher")
            });
    }

    const clearModal = () => {
        setFornavn("");
        setEtternavn("");
        setTlf("");
        setEpost("");
        setModal(false);
    }

    return (
        <div className="VikarWeb">
            <div className={`modal ${modal ? "modalShow" : "modalHide"}`}>
                <div className="modalBody">
                    <h1>Ny vikar</h1>
                    <form onSubmit={addTeacher}>
                        <input name="fornavn" required placeholder="Fornavn" type="text" value={fornavn} onChange={(e) => setFornavn(e.target.value)} />
                        <input name="etternavn" required placeholder="Etternavn" type="text" value={etternavn} onChange={(e) => setEtternavn(e.target.value)} />
                        <input name="tlf" required placeholder="Telefon" type="tel" value={tlf} onChange={(e) => setTlf(e.target.value)} />
                        <input name="epost" required placeholder="Epost" type="email" value={epost} onChange={(e) => setEpost(e.target.value)} />


                        <div className="row">
                            <button type="button" onClick={() => {
                                clearModal();
                            }}>Avbryt</button>
                            <button type="submit" style={{ backgroundColor: "#7BC47F" }}>Lagre</button>
                        </div>

                    </form>
                </div>


            </div>
            <div className="columnList">
                <div className="vikarRow">
                    <p>Vikarer</p>
                    <button onClick={() => {
                        setModal(true)
                    }}>Ny</button>
                </div>
                <ul>
                    {teachers.map(teacher => (
                        <li key={teacher.vikar_id}>
                            <div className="liDiv">
                                <p>{teacher.fornavn}</p>
                                <button onClick={() => {
                                    deleteTeacher(teacher.vikar_id)

                                }}>Slett</button>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

            <div className="viewItem">
                <h1>Ingen funksjoner her</h1>
                <p>Utvikleren er lat, så denne appen er begrenset</p>
                <p>Men menyen på siden virker da</p>
            </div>

        </div>
    )
}