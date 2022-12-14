import tkinter as tk
import csv


window = tk.Tk()
window.geometry("600x700")
window.title("Database Prescrittori")
window.grid_columnconfigure(0, weight=1)

def download_risultati():
    with open('/home/yuri/Desktop/Aprile4.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        if text_input.get():
           input = text_input.get()
           x = input
           dati = [(row["Data Visita"], row['Campioni'],row['Materiale Informativo'],row['Fiale Test']) for row in reader if row [('Cognome E Nome')] == x]
           dato = ('\n'.join(map(str, dati))) 
        else:
            dato = "Non hai inserito nessun nome"
           
    listbox = tk.Text ()
    listbox.insert(tk.END, dato)
    listbox.config(height=30, bg='#D9D8D7')
    listbox.grid (row=18, column=0, padx=1, pady=1, ipadx=80)

    with open('/home/yuri/Desktop/Aprile4.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)    
        if text_input.get():
           input = text_input.get()
           x = input
           datii = [(row["Qualifica/Spec."],row["Indirizzo"], row["Comune"], row["Provincia"], row['email'], row["Numero Fisso"], row["Numero Mobile"]) for row in reader if row [('Cognome E Nome')] == x]
           datx = ('/n'.join(map(str, datii)))
           for datx in (datii):
               if datx != '':
                  break
        else:
           datx = "Non hai inserito nessun nome"
            
    listbox = tk.Text ()
    listbox.insert(tk.END, datx)
    listbox.config(height=3, bg='#D9D8D7')
    listbox.grid ( row=3, column=0, padx=1, pady=1, ipadx=120)
    
def delete():
    text_input.delete(0 ,tk.END)
     
welcome_label = tk.Label (window, text="Cerca contatto:")    
welcome_label.grid (row=0, column=0, sticky="N", padx=20, pady=10)

text_input = tk.Entry()
text_input.grid(row=1, column=0, sticky="WE", padx=30)

download_button= tk.Button (text ="Cerca", command=download_risultati)
download_button.grid(row=2, column=0)
download_button= tk.Button (text ="Reset", command=delete)
download_button.grid(row=2, column=1)
