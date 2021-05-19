backend:
  name: test-repo

media_folder: static/assets
public_folder: /assets

collections:
  - name: presentations
    label: Presentations
    label_singular: Presentation
    folder: presentations
    create: true
    fields:
      - { name: date, label: Date, widget: datetime}
      - { name: conferenceName, label: Conference_Name }
      - { name: talkName, label: TalkName }
      - { name: description, label: Description }
      - { name: location, label: Location }
      - { name: url, label: Url }